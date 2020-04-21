import React, {Fragment} from 'react';
import Tarea from '../tareas/Tarea';

const ListadoTareas = () => {
    //Prueba 
    const tareasProyecto = [
        {nombre: 'Elegir Plamaforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataformas de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ]
    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas">
                {/* Ternario */}
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea tarea={tarea}/>
                    ))
                }
            </ul>
        </Fragment>

     );
}
 
export default ListadoTareas;