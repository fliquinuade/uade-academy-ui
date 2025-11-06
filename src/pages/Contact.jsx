import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'


export function Contact(){
    
    return (
        
        <section className="pb-40">
            {/* HERO */}
            <header className="relative">
                <div
                className="h-[380px] sm:h-[440px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')" }}
                aria-hidden="true"
                ></div>
                <div className="pointer-events-none absolute inset-0 bg-slate-900/70" aria-hidden="true"></div>

                <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-4xl font-semibold sm:text-6xl text-white">Contacto</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                    Estamos aquí para ayudarte. Utiliza el formulario a continuación para
                    ponerte en contacto con nosotros.
                    </p>
                </div>
                </div>
            </header>

            <div className="relative z-10 -mt-16 sm:-mt-24">
                <div className="mx-auto max-w-6xl px-4 ">

                <ContactForm />

                <ul className="mt-8 grid gap-6 md:grid-cols-3 text-white ">
                    <li>
                    <article className="h-full rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
                        <div className="text-white mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.34-.5 7.16 5.01L18.66 6H4.34ZM20 7.89l-8 5.6-8-5.6V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V7.89Z"/></svg>
                        </div>
                        <h3 className="text-lg font-semibold">Email us:</h3>
                        <p className="mt-2 text-sm text-slate-300">Email us for general queries, including marketing and partnership opportunities.</p>
                        <a href="mailto:hello@flowbite.com" className="mt-3 inline-block text-sm font-medium text-indigo-400 underline underline-offset-4 hover:text-indigo-300">hello@flowbite.com</a>
                    </article>
                    </li>

                    <li>
                    <article className="h-full rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.27.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
                        </div>
                        <h3 className="text-lg font-semibold">Call us:</h3>
                        <p className="mt-2 text-sm text-slate-300">Call us to speak to a member of our team. We are always happy to help.</p>
                        <a href="tel:+16467865060" className="mt-3 inline-block text-sm font-medium text-indigo-400 underline underline-offset-4 hover:text-indigo-300">+1 (646) 786-5060</a>
                    </article>
                    </li>

                    <li>
                    <article className="h-full rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M10.325 4.317a1 1 0 0 1 .94-.317 8.05 8.05 0 0 1 1.47 0 1 1 0 0 1 .94.317l.93 1.022c.3.33.77.45 1.19.3.5-.17 1.01-.31 1.54-.41a1 1 0 0 1 1.13.65l.47 1.29c.15.42.54.71.98.74.54.04 1.07.12 1.58.24a1 1 0 0 1 .78 1.08l-.16 1.37a1.2 1.2 0 0 0 .27.94l.86 1.05a1 1 0 0 1 0 1.26l-.86 1.05c-.24.29-.33.68-.27 1.05l.16 1.32a1 1 0 0 1-.78 1.08 9.9 9.9 0 0 1-1.58.24 1.2 1.2 0 0 0-.98.74l-.47 1.29a1 1 0 0 1-1.13.65c-.53-.1-1.04-.24-1.54-.41a1.2 1.2 0 0 0-1.19.3l-.93 1.02a1 1 0 0 1-.94.32c-.49-.06-.98-.06-1.47 0a1 1 0 0 1-.94-.32l-.93-1.02a1.2 1.2 0 0 0-1.19-.3c-.5.17-1.01.31-1.54.41a1 1 0 0 1-1.13-.65l-.47-1.29a1 1 0 0 1 1.13-.65c.53.1 1.04.24 1.54.41.42.15.89.03 1.19-.3l.93-1.02ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/></svg>
                        </div>
                        <h3 className="text-lg font-semibold">Support</h3>
                        <p className="mt-2 text-sm text-slate-300">Email us for general queries, including marketing and partnership opportunities.</p>
                        <a href="#" className="mt-3 inline-block text-sm font-medium text-indigo-400 underline underline-offset-4 hover:text-indigo-300">Support center</a>
                    </article>
                    </li>
                </ul>
                
                </div>
            </div>

        </section>
        
    )
}