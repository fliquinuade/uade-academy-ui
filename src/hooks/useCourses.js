import { useState, useEffect, useCallback } from "react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../services/coursesApi";

export function useCourses(){

    //Estado para la lista de cursos, carga y error
    const [ data, setData ] = useState([]); // Estado que maneja el LISTADO DE CURSOS
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    //Crear funciones especificas para CRUD
    //Funcion obtener todos los cursos
    const fetchAll = useCallback(async () => {
        //reinicialización de estados
        setLoading(true);
        setError(null);
        try{
            const coursesList = await getCourses();
            //actualizar el estado de cursos con la respuesta
            setData(coursesList);
        }catch(e){
            //actualizo el estado de error, con el posible error de la petición
            setError(e)        
        }finally{
            //actualizo el estado cargando en false
            setLoading(false);
        }
    },[]);
    

    // Efecto para cargar los cursos al montar la componente
    useEffect(() =>{
        fetchAll();
    },[fetchAll])
    
    /**
     * Funcion para crear un curso
     * @param {*} payloadCourse: los datos del curso a crear
     */
    const create = async (payloadCourse) => {
        setLoading(true);
        setError(null);
        try{
            const courseCreated = await createCourse(payloadCourse);
            //Añadirlo el curso al estado del listado cursos anterior
            // toma el listado de cursoso anterior y genera un nuevo array con el y courseCreated            
            setData(prev => [...prev, courseCreated]);
        }catch(e){
            setError(e);
        }finally{
            setLoading(false);
        }
    }

    /**
     * Funcion para actualizar el curso
     * @param {*} id 
     * @param {*} payloadCourse 
     */
    const update = async (id, payloadCourse) => {
        setLoading(true);
        setError(null);
        try{
            const courseUpdated = await updateCourse(id,payloadCourse);
            // Actualizar el curso en el estado del listado cursos anterior
            // se usa map para crear un nuevo array con el curso actualizado buscando por el id
            setData( prev  => prev.map(c=> c.id === id ? courseUpdated: c))
        }catch(e){
            setError(e);
        }finally{
            setLoading(false);
        }
    }

    /**
     * Funcion para eliminar un curso
     */
    const remove = async(id) => {
        setLoading(true);
        setError(null);
        try{
            //llamo al servicio para eliminar el curso
            await deleteCourse(id);
            //actualizado el estado del listado cursos
            //usamos filter para crear un nuevo array con los cursos que no contengan la id a eliminar.
            setData( prev  => prev.filter(c => c.id != id))
        }catch(e){
            setError(e);
        }finally{
            setLoading(false);
        }
    }

    // Devolver los recursos que queremos exponer del customHook
    return {data, loading, error, fetchAll, create, update, remove}
}