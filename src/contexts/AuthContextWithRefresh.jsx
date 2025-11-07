//Contexto de autenticación que tiene soporte para refresh tokens
import { createContext, useContext, useState, useCallback, useMemo } from "react";
// importarme las funciones del servicio tokenService
import * as tokenService from '../services/tokenService'

// 1. Creamos el contexto de autenticación
export const AuthContextWithRefresh = createContext(null);

// 2. Proveedor del contexto de autenticación
export function AuthProviderWithRefresh({ children }) {

    //ESTADOS LOCALES DEL CONTEXTO
    const [token, setToken] = useState(
        //obtenemos el access token desde el storage por medio del servicio
        tokenService.getAccessToken() || null
    );

    const [refreshToken, setRefreshToken] = useState(
        //obtener el refresh token desde el storage por medio del servicio
        tokenService.getRefreshToken() || null
    )

    // Funcion logout para cerrar sesión, limpiar los estados
    const logout = useCallback(() =>{
        console.log("Cerrando sesión..");
        //Borro tokens del localstorage por medio del servicio
        tokenService.clearTokens();
        //Limpiar los estados
        setToken(null);
        setRefreshToken(null);
    }, [setToken,setRefreshToken]);

    // Funcion login para autenticar con credenciales de usuario/constraseña
    const login = useCallback(async({email, password}) =>{
        // Delegamos al servicio la comunicación con el backend
        const result = await tokenService.loginWithTokens(email,password);
        if( result.success ){
            //Desde el context no necesito almacenar en el storage, ya lo hace el servicio
            //Debo actualizar los estados
            setToken(tokenService.getAccessToken());
            setRefreshToken(tokenService.getRefreshToken());
            return { ok: true}
        }
        //devuelvo respuesta con el error ocurrido
        return {ok : false, error: result.error};        
    },[setToken,setRefreshToken]);

    // Funcion para renovar el access token usando el servicio
    const renewAccessToken = useCallback(async()=>{
        //delegamos al servicio la conexión con el backend de refresh
        const result = await tokenService.renewAccessToken();
        if (result.success){
            //actualizar el estado con el nuevo access token, obtenido de la respuesta
            //del servicio
            setToken(result.token);
            //setToken(tokenService.getAccessToken());
            return { ok: true, token: result.token}
        }
        // Si hay un error, no se pudo renovar el token. Debo hacer logout para limpiar el estado
        logout();
        //devuelvo respuesta con el error ocurrido
        return { ok: false, error: result.error }

    },[setToken,logout])

    // 5. Memorizamos el valor del contexto para optimizar renderizados
    const contextValue = useMemo(() =>({
        token,
        refreshToken,
        isAuthenticated: !!token,

        //funciones
        login,
        logout,
        renewAccessToken
    }),[token, refreshToken, login,logout, renewAccessToken])

    // 6. Proveemos el contexto a los componentes hijos
    return (
            <AuthContextWithRefresh.Provider value={contextValue}>
                {children}
            </AuthContextWithRefresh.Provider>
        );
}

// 7. Hook personalizado para consumir el contexto de autenticación
export function useAuthWithRefresh() {
    const ctx = useContext(AuthContextWithRefresh);
    if (!ctx) throw new Error("AuthContextWithRefresh debe usarse dentro de <AuthProviderWithRefresh>");
    return ctx;
}