import React,{ useReducer} from 'react';
import { v4 as uuidv4} from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGRERGAR_PROYECTO } from '../../types';

const proyectos = [
    {id: 1,nombre: 'Tienda Virtual'},
    {id: 2,nombre: 'Intrannet'},
    {id: 3,nombre: 'Diesno de Sitios Web'},
    {id: 4,nombre: 'MEARN'}
]

//Para cambiar el state del form para habilitar el formulario
const ProyectoState = props => {

    const initialState = {
        proyectos : [],
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

    //Obtener los proyectos
    const obtenerProyectos = proyectos => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
            //El payload siempre es lo que toma de parametro 
        });
    }


    //Agregar nuevo proyecto
    const agrergarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //
    }

    //Creamos el provider para importarlo en el APP
    return (
        <proyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agrergarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;