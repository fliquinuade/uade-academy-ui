import { useState } from 'react'
import { CourseForm } from "../components/CourseForm";
import { CourseList } from "../components/CourseList";
import { useCourses } from "../hooks/useCourses"

export function CourseAdmin(){     

    // Estado que me va a permitir saber si se trata de una edicion
    // editing contenga los datos del curso a editar.
    const [courseEditing, setCourseEditing ] = useState(null);

    //usamos el custom hook para manejar cursos
    const { 
        data: coursesCH, // renombrando data con courses
        loading,
        error,
        create,
        update,
        remove
    } = useCourses();
    
    //definimos funcion para crear un curso
    const handleCreate = async(payloadCourse) =>{
        //llamamos a la funcion create del customHook -> comunica con el servicio APIREST
        await create(payloadCourse);
    }

    //definimos funcion que permite obtener el curso que se quiere editar
    const handleEdit = (course) => {
        //cargamos el curso en el estado courseEditing
        setCourseEditing(course);        
    }

    //definimos la funcion que se comunica con el servicio para Actualizar un curso
    const handleUpdate = async (payloadCourse) =>{        
        await update(courseEditing.id,payloadCourse);
        setCourseEditing(null);
    }

    //definimos la funcion que la componente hija va a ejecutar
    const handleDelete = async(id,name) => {
        // si el usuario no confirma eliminacion no hace nada
        if (!confirm(`Desea eliminar el curso ${name}?`)) return
        // ejecuta la funcion de customHook para eliminar
        await remove(id)
    }

    return(
        <div className="px-4 py-8 my-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-white">Administrar cursos</h1>
                    <div className="flex items-center gap-2">
                        <button  className="rounded bg-emerald-500 px-3 py-1 text-white">Nuevo curso</button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-2">
                        {
                            loading ?
                                    <p className="text-slate-300">Cargando...</p> 
                                :
                                    <CourseList
                                        courses={coursesCH}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />
                        }
                        {
                            error ? <p className="text-red-400">Error: {String(error)}</p> : ''
                        }
                    </div>

                    <aside className="md:col-span-1">
                        <CourseForm 
                            initialForm={ courseEditing || {}}
                            // dependiendo del estado courseEditing envio una funcion o la otra                            
                            onSubmit={ courseEditing ? handleUpdate: handleCreate}
                        />
                        <div className="bg-white/5 p-4 rounded border border-white/10">
                            <p className="text-slate-300">Seleccione un curso para editar o cree uno nuevo.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}