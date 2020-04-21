import React from 'react';

const FormuTarea = () => {
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