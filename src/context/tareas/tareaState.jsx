import React, {useReducer} from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO, 
    AGERGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir Plamaforma', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            {id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 5, nombre: 'Elegir Plamaforma', estado: true, proyectoId: 3},
            {id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 4},
            {id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 2},
            {id: 9, nombre: 'Elegir Plamaforma', estado: true, proyectoId: 4},
            {id: 10, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 11, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1},
            {id: 12, nombre: 'Elegir Hosting', estado: true, proyectoId: 3}
        ],
        tareasproyecto: null, //para cuando el usuario seleccione una tarea
        errortarea: false
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

    //validar y mostrar un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        });
    }

    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agrergarTarea,
                validarTarea,
                eliminarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;