import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario.
    //nos permite consumir datos del context sin tener que pasarlo por props
    // a lo largo del componente (formularioFalse)
    const proyectosContext = useContext(proyectoContext);
    //utilizar el formulario del proyectoState
    const { formulario, mostrarFormulario } = proyectosContext;


    //State para Proyecto
    const [proyecto, setProyecto] = useState({
        nombre:'',
    });

    //Extrae el nombre del proyecto
    const { nombre } = proyecto;


    //Lee los contenito del input
    const onChangeProyecto =e=> {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto =e=> {
        e.prenventDefault();

        ///Validar el Proyecto

        //agrergar el state 

        //Reinicial el form
    }

    //Mostrar el formulario nuevoProyecto
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
        <button 
            className="btn btn-block btn-primario"
            onClick={onClickFormulario}        
            >Nuevo Proyecto</button>

        {
            
            formulario
            ? 
            (
                <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
                    <div className="formulario-nuevo-proyecto">
                        <input 
                            type="text" 
                            className="input-text" 
                            placeholder="Nombre del Proyecto" 
                            name="nombre"
                            value={nombre} 
                            onChange={onChangeProyecto}
                            
                        />
                    </div>

                    <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"/>
                </form>
            )
            : null
        }
        </Fragment>

     );
}
 
export default NuevoProyecto;