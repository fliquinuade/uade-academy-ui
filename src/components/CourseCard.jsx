import { useState } from 'react';
import { Link } from 'react-router'

export function CourseCard({
  id = 0,
  name = "Nombre del curso",
  image = "https://www.uade.edu.ar/media/lxkmk3yb/vd5.jpg",
  description = "Breve descripción del curso...",
  start_date = "01/03/2025",
  cost = "$100k",
  level = "Básico", // "basico" | "intermedio" | "avanzado"
  initialIsAdded = false
}) {

    //Manejo de estado con useState - es una hook de react
  // useState es una función que retorna un array con dos elementos, 
  // el primero es el valor del estado y el segundo es una función 
  // para actualizar ese estado
  // initialIsAdded es el valor inicial del estado, que se pasa como 
  // argumento a useState
  // el estado inicial solo se ejecuta una vez, cuando se monta el componente,
  //  no se reinicia cada vez que se renderiza
  // const [isAdded, setIsAdded] = useState(false);
  //el estado esta separado de cada componente
  const [isAdded, setIsAdded] = useState(initialIsAdded);

  const handleAddButtonClick = () => {
    setIsAdded(!isAdded);
  }

  const agregadoClass = isAdded ?
      "bg-red-500 text-white border-red-500 hover:brightness-110": 
      "bg-yellow-300 text-black border-black/60 hover:brightness-105"    
  ;

  const textoBoton = isAdded ? "Eliminar curso" : "Agregar curso";

  return (
    <article
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      {/* Portada */}
      <Link to={`/cursos/${id}`} className="block aspect-[16/9] w-full ">
        <img
          src={image}
          alt={`Portada del curso ${name}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Cuerpo */}
      <div className="grid gap-2 p-4 text-white">
        {/* Fila: pildora + favorito */}
        <div className="mb-1 flex items-center justify-between">
          <div className="inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-semibold bg-orange-400/80 text-amber-900">
            {level}
          </div>          
        </div>

        {/* Título */}
        <h4 className="text-lg font-bold leading-snug sm:text-xl">{name}</h4>

        {/* Descripción */}
        <p className="text-sm text-white sm:text-[0.95rem]">{description}</p>

        <hr className="my-1 border-t border-slate-300/50" />

        {/* Info inferior: fecha + costo */}
        <div className="flex items-center justify-between text-sm">
          <p >Comienza: {start_date}</p>
          <p className="font-bold ">{cost}</p>
        </div>

        {/* Botón */}
        <div className="pt-1 flex justify-between items-center">
          <button
            type="button"
            className={`w-40 rounded-lg border px-3 py-2 text-sm font-semibold transition-transform duration-200
                ${agregadoClass}
              `} 
            onClick={handleAddButtonClick}           
          >
            <span className="pointer-events-none align-middle">
              {textoBoton}
            </span>
          </button>  
          <Link 
            to={`/cursos/${id}`} 
            className="text-sm text-indigo-400 hover:text-indigo-300">
              Ver Detalles →
          </Link>        
        </div>
      </div>

    </article>
  );

}

