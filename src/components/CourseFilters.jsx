export function CourseFilters({filters, onFilterChange}){
    

    return (
        <div className="w-full max-w-4xl mx-auto mb-8 p-6 bg-slate-800 rounded-lg shadow-lg">
            <h3 className='text-white text-3xl mb-5'>
                Filtros de busqueda
            </h3>
            <div className="grid gap-4 md:grid-cols-3 items-end">
                <div className='flex flex-col'>
                    <label htmlFor="" 
                        className="text-sm font-medium text-slate-300 mb-2">
                            Nombre Curso
                    </label>
                    <input
                        id='filter-name'
                        type='text'
                        value={filters.name}
                        onChange={(e) => onFilterChange('name',e.target.value)}
                        placeholder='Ej. react, vue...'
                        className="px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" 
                        className="text-sm font-medium text-slate-300 mb-2">
                        Nivel
                    </label>
                    <select
                        id="filter-level"
                        value={filters.level}
                        onChange={(e) => onFilterChange('level',e.target.value)}
                        className="px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Todos los niveles</option>
                        <option value="Básico">Básico</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                </div>
            </div>
            <div className="mt-4 text-sm text-slate-300">
                <span>Filtros activos</span>
                <span className="text-white px-2">Nombre: {filters.name}</span>
                <span className="text-white px-2">Level: {filters.level}</span>
            </div>
        </div>
    )
}