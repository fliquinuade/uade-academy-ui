import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { CourseCard } from '../components/CourseCard'
import { CourseFilters } from '../components/CourseFilters'
import courses from '../data/courses'
import { useCoursesFilter } from '../hooks/useCoursesFilter'

export function Courses(){

    //Extraigo del custom hoook lo que necesito implementar
    const {
        courses,
        isLoading,
        error,
        filters: filtersCH,
        updatedFilter
    } = useCoursesFilter() 
    
    return (
        <section className="pb-40">
            {/* HERO */}
            <header className="relative">
                <div
                className="h-[380px] sm:h-[440px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop')" }}
                aria-hidden="true"
                ></div>
                <div className="pointer-events-none absolute inset-0 bg-slate-900/70" aria-hidden="true"></div>

                <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <h1 className="text-4xl font-semibold sm:text-6xl text-white">Cursos</h1>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                    Explora nuestra variedad de cursos y elige el que más te interese.
                    </p>
                </div>
                </div>
            </header>
            <div className='flex-container flex-col justify-items-center'>
                <section className='flex flex-col justify-center items-center text-white py-10'>
                    <h2 className='text-3xl font-bold'>Listado de cursos</h2>
                    <p>Tenemos una gran oferta de cursos con las ultimas tecnologías</p>
                </section>
                <section className='w-full px-4 py-10'>
                    <CourseFilters
                        filters={filtersCH}
                        onFilterChange={updatedFilter}
                    />
                </section>
                { isLoading && (
                    <section className='w-full px-4 py-20 flex justify-center items-center'>
                        <div className='text-white text-lg'>
                            🕰 Cargando cursos ...
                        </div>
                    </section>
                ) }

                { error && (
                    <section className='w-full px-4 py-20 flex justify-center items-center'>
                        <div className='bg-red-800 text-white text-lg rounded-lg px-6 py-4'>
                            { error }
                        </div>
                    </section>
                ) }
                
                {/* Visualizacion de cursos */}
                { !isLoading && !error && (
                    <section className='grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-8/12'>
                        {
                            courses.length > 0 ? (
                                courses.map(course => (
                                    <CourseCard key={course.id} 
                                        id={course.id}
                                        image={course.image}
                                        name={course.name}
                                        description={course.description}
                                        start_date={course.start_date}
                                        cost={course.cost}
                                        level={course.level}
                                        initialIsAdded={course.isAdded}
                                    />
                                ))
                            ):( 
                                <div className='col-span-full text-center text-white py-10'>
                                    <p className='text-2xl mb-2'>No se encontraron cursos</p>
                                    <p className='text-slate-400'>Intenta con otros filtros</p>
                                </div>
                            )
                        }
                    </section>  
                )}          
            </div>
        </section>
    )
}