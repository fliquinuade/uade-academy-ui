import { useAuth } from '../contexts/AuthContext'
import { useAuthWithRefresh } from '../contexts/AuthContextWithRefresh';
import { Navigate, useLocation } from 'react-router';

export function ProtectedRoute({children}){

    const { isAuthenticated }= useAuthWithRefresh();
    const location = useLocation();

    if (!isAuthenticated){
        //Redireccion al usuario a la pagina de login, enviando la URL desde 
        //donde se quizo acceder
        return <Navigate to="/login" state={{ from: location}} replace/>
    }

    return children
}