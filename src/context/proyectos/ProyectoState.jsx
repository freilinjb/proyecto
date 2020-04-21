import React,{ useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//Para cambiar el state del form para habilitar el formulario
const ProyectoState = props => {

    const initialState = {
        formulario : false
    }

    //Dispatch para ejecutar las acciones.
    //useReducer es el remplazo de redux

    //dispath va a ejecutar los diferentestes type para ejecutarlo en el proyectoReducer
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD del proyecto
    //Creamos el provider para importarlo en el APP
    return (
        <proyectoContext.Provider 
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;