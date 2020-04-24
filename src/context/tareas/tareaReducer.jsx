
import {
    TAREAS_PROYECTO,
    AGERGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

export default(state, action) => {

    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
                //itere en cada tarea y cuando la tarea es igual al proyecto se agrergan al DOM y al state
            }
        case AGERGAR_TAREAS:
            return{
                ...state,
                tareas:[...state.tareas, action.payload], 
                errortarea: false // reseteamos el error tarea al registrar la tarea
                
                //agrerga la tarea al conjunto 
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea:true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }
        //Son iguales las condiciones tanto en actualizar como en el estado
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA :
            return{
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload ? action.payload : tarea)
            }
        case TAREA_ACTUAL :
            return{
                ...state,
                tareaseleccionada: action.payload
            }
        default: 
            return state;
    }
} 