import React,{ useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormuTarea = () => {

    //Extraer proyectos del state inicial
    const proyectosConext = useContext(proyectoContext);
    const { proyecto } = proyectosConext;
    
    //obtener la funcion del context
    const tareasContext = useContext(tareaContext);
    const {agrergarTarea, validarTarea} = tareasContext;

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer el nombrer del proyecto
    const { nombre} = tarea;

    //Si no hay un proyecto seleccionado oculta el formulario Tarea
    if(!proyecto) return null;
    //Array destructuring para extraer el proyecto actual
    
    const [proyectoActual]= proyecto;

    //Leer los valores del formulario
    const handleChange =e=> {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit =e=> {
        e.preventDefault();

        //validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }
        //pasar la validacion

        //agrergar la nueva tarea al state de las tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agrergarTarea(tarea);

        //reiniciar el form
    }

    return ( 
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input type="text" name="nombre" value={nombre} onChange={handleChange} className="input-text" placeholder="Nombre de la Tarea..."/>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agrergar Tarea"/>
                </div>
            </form>
        </div>
     );
}
 
export default FormuTarea;