//conteien las funciones que van a interactuar con el state
//Reducer es el remplazo de redux
import { FORMULARIO_PROYECTO } from '../../types';

//el reducer lo unico que hace es cambiar el state
export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,  //toma una copia del state y lo cambia a true
                formulario: true
            }
        default:
            return state;
    }
}