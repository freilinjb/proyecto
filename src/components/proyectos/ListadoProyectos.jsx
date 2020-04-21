import React, {useContext} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import ProyectoState from '../../context/proyectos/ProyectoState';

const ListadoProyectos = () => { 
    
    //Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;

    //Revisa si proyecto tiene contenido
    if(proyectos.length === 0) return null;


    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto key={proyecto.id} proyecto={proyecto}/>
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;