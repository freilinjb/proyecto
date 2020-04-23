import React, {useReducer} from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO, 
    AGERGAR_TAREAS
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir Plamaforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            {nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {nombre: 'Elegir Plamaforma', estado: true, proyectoId: 3},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 4},
            {nombre: 'Elegir Hosting', estado: true, proyectoId: 2},
            {nombre: 'Elegir Plamaforma', estado: true, proyectoId: 4},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1},
            {nombre: 'Elegir Hosting', estado: true, proyectoId: 3}
        ],
        tareasproyecto: null //para cuando el usuario seleccione una tarea
    }

    //crear dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    //Agregar una tarea al proyecto seleccionado
    const agrergarTarea = tarea => {
        dispatch({
            type:AGERGAR_TAREAS,
            payload: tarea
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agrergarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;