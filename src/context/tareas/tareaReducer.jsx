
import {
    TAREAS_PROYECTO,
    AGERGAR_TAREAS
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
                tareas:[...state.tareas, action.payload]
                //agrerga la tarea al conjunto 
            }
        default: 
            return state;
    }
} 