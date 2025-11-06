import { useEffect, useState } from "react"

export function CourseForm({initialForm = {} , onSubmit}){
    
    const [form, setForm ] = useState({
        name: '',
        image: '',
        description: '',
        start_date: '',
        cost: '',
        level:'',
        ...initialForm
    })

    //Uso un efecto para poder controlar la depencia del initialForm
    //todas las veces que cambie, cargue el estado Form con el valor nuevo.
    useEffect(()=>{
        setForm(initialForm);
    },[initialForm])

    const submit = (e) => {
        //prevenir el funcionamiento por defecto del envio del formulario
        e.preventDefault();
        //validacion del formulario
        if(!form.name || form.name.trim().length < 3){
            alert("El nombre no puede ser vacio y debe tener al menos 3 caracteres");
            return
        }
        //llamamos a la funcion enviada por el padre, con el contenido del formulario
        onSubmit(form);
    }

    const handle = (e) => {
        // e es el evento detectado, podemos obtener el name y el value del elemento que lanzo evento
        // extraigo el atributo name y el value del elemento que lanzo el evento
        const { name, value } = e.target;
        //Actualizo el estado del formulario, manteniendo los valores anteriores        
        setForm(prev => ({ ...prev, [name]:value}))
    }

    return (
        <form onSubmit={submit} className="space-y-3 bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="grid gap-2 sm:grid-cols-2">
                <input name="name" placeholder="Nombre" value={form.name} onChange={handle} className="p-2 rounded bg-white/3 text-white" />
                <input type='url' name="image" placeholder="URL imagen" value={form.image} onChange={handle} className="p-2 rounded bg-white/3 text-white" />
                <input type='date' name="start_date" placeholder="Fecha inicio" value={form.start_date} onChange={handle} className="p-2 rounded bg-white/3 text-white" />
                <input name="cost" placeholder="Costo" value={form.cost} onChange={handle} className="p-2 rounded bg-white/3 text-white" />
            </div>

            <label className="block text-sm text-slate-300">
                <span className="sr-only">Nivel</span>
                <select name="level" value={form.level} onChange={handle} 
                    className="w-full appearance-none rounded-md bg-white/3 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 ">
                    <option value="">Seleccionar nivel</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </label>

            <textarea name="description" placeholder="Descripción" value={form.description} onChange={handle} className="p-2 rounded bg-white/3 text-white w-full h-28" />

            <div className="flex gap-2 justify-end">
                
                <button type="submit" className="px-4 py-1 rounded bg-emerald-500 text-white">Guardar</button>
            </div>
        </form>
    )
}