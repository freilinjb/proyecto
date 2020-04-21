import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>

        {/* Administrar nuestras tareas */}
            <div className="seccion-principal">
                <main>
                    <div className="contenedor-tareas">
                        <Barra/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;