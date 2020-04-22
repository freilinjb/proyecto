import React,{ useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormuTarea = () => {

    //Extraer proyectos del state inicial
    const proyectosConext = useContext(proyectoContext);
    const { proyecto } = proyectosConext;

    //Si no hay un proyecto seleccionado oculta el formulario Tarea
    if(!proyecto) return null;
    //Array destructuring para extraer el proyecto actual
    
    const [proyectoActual]= proyecto;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" name="nombre" className="input-text" placeholder="Nombre de la Tarea..."/>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agrergar Tarea"/>
                </div>
            </form>
        </div>
     );
}
 
export default FormuTarea;