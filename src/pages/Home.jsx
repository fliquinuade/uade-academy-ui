import { Link } from "react-router";
import { CourseCard } from '../components/CourseCard'
import { ContactForm } from '../components/ContactForm'
import courses from '../data/courses'

export function Home(){
        
    return (
        
        <div className="bg-slate-900 text-slate-100 ">
            {/* HERO SECTION */}
            <div className="relative overflow-hidde">
                <div className="relative z-10 pb-20 pt-[150px] lg:pb-[120px] lg:pt-[210px]
                    bg-[url('/img/145.webp')]
                    ">
                    <div className="absolute inset-0 z-[-1] h-full w-full bg-slate-900 opacity-50"></div>
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-[570px] bg-slate-900 py-10 px-8 sm:p-12 md:p-[60px]">
                                    <span className="block mb-3 text-base font-medium text-indigo-500">
                                        Innovación educativa para el siglo XXI
                                    </span>
                                    <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white md:text-4xl">
                                        Aprendé, crecé y transformá tu futuro.
                                    </h1>
                                    <p className="mb-8 text-base font-medium text-body-color dark:text-dark-6 lg:mb-10">
                                        Diseñamos experiencias de aprendizaje dinámicas y accesibles, para que seas protagonista de tu desarrollo personal y profesional.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Link to="/cursos" className="py-3 text-base font-medium text-white transition bg-indigo-500 px-7 hover:bg-indigo-600">
                                            Descubrí más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* QUIENES SOMOS */}
            <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-indigo-400/90 text-xs font-semibold tracking-widest uppercase">
                        Por qué elegirnos
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                        Transformamos la educación con experiencias prácticas y acompañamiento real
                    </h2>
                    <p className="mt-4 text-slate-300">
                        En UADE Academy creemos que el conocimiento no debe limitarse a las aulas ni a los libros. Nuestros cursos están orientados a la acción, con proyectos, desafíos colaborativos y el apoyo constante de mentores y especialistas.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Comenzá ahora
                        </a>
                    </div>
                </div>
            </section>
            {/* CURSOS */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-indigo-400/90 text-xs font-semibold tracking-widest uppercase">Nuestros cursos</p>
                    <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">Cursos Recientes</h3>
                    <p className="mt-4 text-slate-300">
                        En esta sección, encontrarás una selección de nuestros cursos más recientes, diseñados para brindarte las habilidades y conocimientos que necesitas.                        
                    </p>
                </div>

                {/* Filtros (estáticos) */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                    {["Todos", "Básicos", "Intermedios", "Avanzados"].map((f, i) => (
                        <button
                            key={f}
                            className={
                                "rounded-full px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/10 " +
                                (i === 0 ? "bg-white/10" : "bg-transparent")
                            }
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid de piezas */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((c) => (
                        <CourseCard 
                            key={c.id} 
                            id={c.id}
                            name={c.name}
                            image={c.image}
                            description={c.description}
                            start_date={c.start_date}
                            cost={c.cost}
                            level={c.level}
                            initialIsAdded={c.isAdded}
                        />                               
                    ))}
                </div>
            </section>
            {/* SECCION CONTACTO */}
            <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
                <div className="mx-auto max-w-3xl text-center pb-5">
                    <p className="text-indigo-400/90 text-xs font-semibold tracking-widest uppercase">Contáctanos</p>
                    <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">¿Cómo Podemos Ayudarte?</h3>
                    <p className="mt-4 text-slate-300">
                        Por cualquier consulta, no dudes en contactarnos.
                    </p>
                </div>
            
                <ContactForm />
            </section>
        </div>
            
    )
}