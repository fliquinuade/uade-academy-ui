//onEdit y onDelete, son funciones que se enviando a la componente para que pueda
//ejecutarlas intermante
export function CourseList({courses, onEdit, onDelete}){
    //si no hay cursos muestro el mensaje
    if  (!courses) return <p className="text-slate-300">No hay cursos</p>

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(c => (
                <div key={c.id}>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <img src={c.image} alt={c.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="mt-3 text-lg font-semibold text-white">{c.name}</h3>
                        <p className="text-sm text-slate-300 mt-2">{c.description}</p>
                        <div className="mt-3 flex gap-2">
                            <button onClick={() => onEdit(c)} className="rounded px-3 py-1 bg-indigo-600 text-white text-sm">Editar</button>
                            <button onClick={() => onDelete(c.id,c.name)} className="rounded px-3 py-1 bg-red-500 text-white text-sm">Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}