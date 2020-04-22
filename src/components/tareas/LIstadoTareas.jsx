import React, {Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoTareas = () => {

    //Extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Si no hay un proyecto seleccionado    
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual]= proyecto;

    //Prueba 
    const tareasProyecto = []

    //Eliminar proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);   
    }
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

            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar &times;</button>
        </Fragment>

     );
}
 
export default ListadoTareas;