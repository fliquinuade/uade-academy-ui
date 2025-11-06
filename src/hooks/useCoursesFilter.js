import { useState, useEffect, useCallback } from "react";
import { getCoursesWithFilters } from '../services/coursesApi'

export function useCoursesFilter(){

    //estado para almacenar la respuesta de los cursos del endpoint
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError ] = useState(null);

    //el estado que manejo los filtros de busqueda
    const [filters, setFilters] = useState({
        name:'',
        level:''
    })

    //esta funcion se va recrear cuando filtros cambien 
    //  lanza la peticion al endpoint de cursos
    const fetchCourses = useCallback(async ()=>{
        console.log('Se deberia llamar la API con los filtros');
        console.log(filters);
        //validacion preventiva del name si es menor la longitud 3
        if(filters.name && filters.name.trim().length < 3){
            console.log('No se dispara la petición al backend');
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            const data = await getCoursesWithFilters(filters);
            //actualizado el estado cursos con lo que responde el servicio
            setCourses(data);
        } catch (err){
            console.error('Error al cargar cursos:',err);
            setError(err.message || 'Error al cargar cursos');
            //limpiar la lista de cursos
            setCourses([]);
        } finally{
            setIsLoading(false);
        }
    },[filters]);

    //cuando se detecte un cambio en esa funcion
    useEffect(()=>{
        fetchCourses();
    },[fetchCourses])

    //Funcion que me permita actualizar el estado del filtro
    const updatedFilter = useCallback((filterName,value)=>{
        console.log(`Actualizado filtro ${filterName}: ${value}`);  
        //actualizamos estado del filtro, con un nuevo objeto
        //que conseve el valor anterior de las props de filtros,
        //pero que solo actualice la prop correspondiente a filterName con value
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }))      
    }, [])

    //REtornamos lo que necesitan las demas componentes
    return {
        //ESTADOS
        courses,
        isLoading,
        error,
        filters,

        //FUNCIONES
        updatedFilter
    }

}