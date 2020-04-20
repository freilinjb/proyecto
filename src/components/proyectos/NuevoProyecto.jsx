import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

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

    return ( 
        <Fragment>
        <button className="btn btn-block btn-primario">Nuevo Proyecto</button>

        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
            <div className="formulario-nuevo-proyecto">
                <input 
                type="text" 
                className="input-text" 
                placeholder="Nombre del Proyecto" 
                name="nombre"
                value={nombre} 
                onChange={onChangeProyecto}/>
            </div>

            <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"/>
        </form>
        </Fragment>

     );
}
 
export default NuevoProyecto;