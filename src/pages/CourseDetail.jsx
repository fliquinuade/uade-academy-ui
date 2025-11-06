import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import courses from '../data/courses'

export function CourseDetail() {
    
  const { courseId } = useParams()
  const navigate = useNavigate()
  //filtro del array de cursos en base al id del parametro
  const course = courses.find(c => c.id === parseInt(courseId))

  const [isAdded, setIsAdded] = useState(() => Boolean(course?.isAdded))

  if (!course) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Curso no encontrado</h2>
          <button
            onClick={() => navigate(-1)}
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
          >
            Volver
          </button>
        </div>
      </section>
    )
  }

  const handleToggle = () => setIsAdded(prev => !prev)

  const agregadoClass = isAdded ?
    "bg-red-500 text-white border-red-500 hover:brightness-110" :
    "bg-yellow-300 text-black border-black/60 hover:brightness-105"

  const textoBoton = isAdded ? "Eliminar curso" : "Agregar curso"

  return (
    <section className="pb-12">

      <header className="relative">
        <div
          className="h-[280px] sm:h-[360px] bg-cover bg-center"
          style={{ backgroundImage: `url('${course.image}')` }}
          aria-hidden="true"
        ></div>
        <div className="pointer-events-none absolute inset-0 bg-slate-900/60" aria-hidden="true"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h1 className="text-3xl font-semibold sm:text-5xl text-white">{course.name}</h1>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">{course.description}</p>
          </div>
        </div>
      </header>

      <div className="relative my-20">
        <div className="mx-auto max-w-5xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg grid gap-6 md:grid-cols-3 md:items-start">

            <div className="md:col-span-1 flex items-center justify-center">
              <img
                src={course.image}
                alt={`Imagen del curso ${course.name}`}
                className="w-full max-w-xs rounded-lg object-cover shadow-md"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold bg-orange-400/90 text-amber-900">{course.level}</div>
                  <h2 className="mt-3 text-2xl font-bold text-white">{course.name}</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-300">Comienza</p>
                  <p className="font-semibold text-white">{course.start_date}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-300">{course.description}</p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-slate-300">Costo</p>
                  <p className="text-xl font-bold text-white">{course.cost}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate(-1)}                    
                    className="cursor-pointer rounded-lg border border-white/10 bg-white/3 px-4 py-2 text-sm text-white hover:bg-white/5"
                  >
                    ← Volver
                  </button>

                  <button
                    type="button"
                    onClick={handleToggle}
                    className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold ${agregadoClass}`}
                  >
                    {textoBoton}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
