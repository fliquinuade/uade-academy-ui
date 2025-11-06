import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useAuthWithRefresh } from "../contexts/AuthContextWithRefresh";

export default function Login() {
  // Obtenemos la función login del contexto de autenticación
  const { login } = useAuthWithRefresh();
  // Hook para navegar programáticamente
  const navigate = useNavigate();
  // Hook para obtener información de la ubicación actual (útil para redirecciones)
  const location = useLocation();

  // Estado para los campos del formulario
  const [form, setForm] = useState({ email: "", password: "" });
  // Estado para mostrar errores de autenticación
  const [error, setError] = useState("");

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const res = await login(form); // Intenta iniciar sesión con los datos ingresados
      if (res.ok) {
        //Nos permitia hacer una redirección en caso de exito en el login
        const from = "/admin/courses";
        navigate(from, { replace: true });
      } else {
        setError(res.error || 'Error de autenticación')
      }
    })()
  };

  const handle = (e) => {
    // e es el evento del cambio, obtenemos name y value del target (input) que lo disparó    
    const { name, value } = e.target
    // actualizamos el estado del formulario, manteniendo los valores anteriores
    setForm(f => ({ ...f, [name]: value }))
  }

  return (
    <section className="pb-40 pt-20 min-h-screen bg-indigo-50">
      {/* Formulario de login */}
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4">
        <h1 className="text-xl mb-4">Iniciar sesión (DEMO)</h1>
        {/* Mensaje de error si existe */}
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {/* Campo de username */}
        <input
          className="border w-full p-2 mb-2"
          name="email"
          type="text"
          placeholder="Ingrese Email"
          value={form.email}
          onChange={handle}
        />
        {/* Campo de contraseña */}
        <input
          className="border w-full p-2 mb-4"
          name="password"
          type="password"
          placeholder="react123"
          value={form.password}
          onChange={handle}
        />
        {/* Botón de enviar */}
        <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Entrar
        </button>
      </form>
    </section>
  )
}