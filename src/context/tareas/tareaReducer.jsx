
import {
    TAREAS_PROYECTO
} from '../../types';

export default(state, action) => {

    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
                //itere en cada tarea y cuando la tarea es igual al proyecto se agrergan al DOM y al state
            }
        default:
            return state;
    }
} 