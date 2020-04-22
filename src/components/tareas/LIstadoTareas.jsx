import React, {Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

    //Extraer proyectos del state inicial
    const proyectosConext = useContext(proyectoContext);
    const { proyecto } = proyectosConext;

    //Si no hay un proyecto seleccionado
    console.log(proyecto);
    
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual]= proyecto;

    //Prueba 
    const tareasProyecto = [
        {nombre: 'Elegir Plamaforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataformas de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ]
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {/* Ternario */}
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea tarea={tarea}/>
                    ))
                }
            </ul>

            <button type="button" className="btn btn-eliminar">Eliminar &times;</button>
        </Fragment>

     );
}
 
export default ListadoTareas;