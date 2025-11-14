import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthWithRefresh } from "../contexts/AuthContextWithRefresh";

export default function Login() {
  const { login } = useAuthWithRefresh();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      const res = await login(form);
      if (res.ok) {
        const from = "/admin/courses";
        navigate(from, { replace: true });
      } else {
        setError(res.error || "Error de autenticación");
      }
    })();
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display min-h-screen flex flex-col">
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a className="text-xl font-bold text-gray-900 dark:text-white" href="#">UADE <span className="text-primary">Academy</span></a>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="w-full max-w-md mx-auto">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Bienvenido de vuelta</h1>
                <p className="text-gray-600 dark:text-gray-400">Inicia sesión para acceder a tu cuenta.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-red-500">{error}</p>}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handle}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    value={form.password}
                    onChange={handle}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Recordarme</label>
                  </div>
                  <div className="text-sm">
                    <a className="font-medium text-primary hover:text-indigo-500" href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">Entrar</button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background-light dark:bg-background-dark text-gray-500 dark:text-gray-400">O continuar con</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
                      <span className="sr-only">Iniciar sesión con Google</span>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                        <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
  c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
  c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
                        <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
  C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
                        <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
  c-5.222,0-9.617-3.276-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
                        <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2"></path>
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
                      <span className="sr-only">Iniciar sesión con Facebook</span>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
                      <span className="sr-only">Iniciar sesión con LinkedIn</span>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img alt="Estudiantes colaborando en un entorno de aprendizaje moderno y luminoso" className="rounded-lg object-cover w-full h-full max-h-[500px] shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8lwAX87ly035u4uxAATbzq9_Wt29Af1c_pvJoUFIBuPMXECP6NjyepdzkZUiR2CyqYquHHJ0zNsuRuJhsM5pjeIasu49YfJS44FnYyWsRxlkbvK2Zi-YNrIC0lh6VWoIlVN7z9m0cckwCfSBQT8zduC6yvfEmp9wvYtdR7_RBykXNTXOjsxoiCbqczbyD3ws1rW1MWY5xMKCM2_oTXWn2yGKB0YuXdaUBRhhaLxWY_O9-CNSvtoZcgGD2BkrCwMJbVU6bqtlUrPo" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}