import React,{ useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

//Para cambiar el state del form para habilitar el formulario
const ProyectoState = props => {

    const initialState = {
        proyectos : [
            {id: 1,nombre: 'Tienda Virtual'},
            {id: 2,nombre: 'Intrannet'},
            {id: 3,nombre: 'Diesno de Sitios Web'},
            {id: 4,nombre: 'MEARN'}
        ],
        formulario : false
    }

    //Dispatch para ejecutar las acciones.
    //useReducer es el remplazo de redux

    //dispath va a ejecutar los diferentestes type para ejecutarlo en el proyectoReducer
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD del proyecto
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    //Creamos el provider para importarlo en el APP
    return (
        <proyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;