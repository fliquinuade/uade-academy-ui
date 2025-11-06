export function Footer(){

    return (
        <footer className="border-t border-white/10 py-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <a href="/" className="flex items-baseline gap-2 text-white"><span className="text-2xl font-bold tracking-tight">UADE</span><span className="text-sm font-light opacity-80">Academy</span></a>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-white">Estudiar en UADE</h5>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-white">Sistema de Ingreso</a></li>
                            <li><a href="#" className="hover:text-white">Reuniones Informativas</a></li>
                            <li><a href="#" className="hover:text-white">Equivalencias Externas</a></li>
                            <li><a href="#" className="hover:text-white">Creative people</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-white">Propuesta académica</h5>
                        <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            <li><a href="#" className="hover:text-white">Carreras de grado</a></li>
                            <li><a href="#" className="hover:text-white">Diplomaturas</a></li>
                            <li><a href="#" className="hover:text-white">Maestrías</a></li>
                            <li><a href="#" className="hover:text-white">Especializaciones</a></li>
                            <li><a href="#" className="hover:text-white">Capacitación ejecutiva</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-bold text-white">Suscribite a nuestro Newsletter</h5>
                        <div className="mt-3 flex gap-2">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="min-w-0 flex-auto rounded-xl border text-white border-white/10 bg-white-900/60 px-4 py-2.5 text-sm placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="text-white rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold hover:bg-indigo-600">
                                Suscribirme
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-slate-400">© 2025 UADE Academy</div>
            </div>
        </footer>
    )
}