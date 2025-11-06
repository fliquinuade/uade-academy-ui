import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useAuthWithRefresh } from "../contexts/AuthContextWithRefresh";

export function Header(){
    const [isOpen, setIsOpen ] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const { isAuthenticated, logout} = useAuthWithRefresh();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        //clean up
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function handleClick(){
        setIsOpen(!isOpen);        
    }

    const classIsOpen = isOpen ? 'max-h-96 opacity-100':'max-h-0 opacity-0';
    const classHeader = scrolled ? "backdrop-blur-md bg-slate-900/60 border-b border-white/10 shadow-md"
                        :"bg-transparent";
    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-100 ${classHeader}`}>
            <div className="mx-auto max-w-7xl px-4">
                {/* MENU DESKTOP */}
                <div className="flex h-16 items-center justify-between md:h-20">
                    <NavLink
                        to="/" 
                        className="flex items-baseline gap-2 text-white"
                    >
                        <span className="text-2xl font-bold tracking-tight">UADE</span>
                        <span className="text-sm font-light opacity-80">Academy</span>
                    </NavLink>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-2">
                            <li>
                                <NavLink 
                                    to="/"
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/cursos"
                                    className={
                                        ({isActive}) =>
                                        `rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white
                                        ${isActive ? "bg-white/10 text-white":""}
                                        `
                                    }
                                >
                                    Cursos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contacto"
                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                    Contacto
                                </NavLink>
                            </li>  
                            <li>{
                                isAuthenticated ? (
                                        <NavLink 
                                            to="/admin/courses"
                                            className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
                                        >
                                            Admin
                                        </NavLink>
                                    ):''
                                }
                            </li>                            
                        </ul>
                    </nav>
                    <div className="hidden items-center gap-2 md:flex">
                        {
                            isAuthenticated ? (
                                <>                                
                                    <a href="#"
                                        className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">
                                        Perfil
                                    </a>
                                    <button onClick={logout} 
                                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer">
                                        Logout
                                    </button>
                                </>
                            ): (
                                <>
                                    <a href="#"
                                        className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">Registro</a>
                                    <NavLink  to="/login"
                                        className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        Login
                                    </NavLink>
                                </>
                            )
                        }
                        
                    </div>
                    <button
                        onClick={handleClick}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Abrir menú"
                        className="text-white md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <span className="sr-only">Abrir menú</span>
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                            {isOpen ? (
                                <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
                <div id="mobile-menu" 
                    className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${classIsOpen}`}>
                    <nav>
                        <ul >
                            <li>
                                <a
                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                                >Inicio</a>
                            </li>
                            <li>
                                <a
                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                                >Cursos</a>
                            </li>
                            <li>
                                <a
                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                                >Contacto</a>
                            </li>  
                        </ul>
                    </nav>
                    <div  className="mt-3 grid grid-cols-2 gap-2">
                        <a href="#"
                            className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">
                                Registro
                        </a>
                        <a href="#"
                            className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}