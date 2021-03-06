import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const ListadoProyectos = () => { 
    
    //Extrar proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener cproyectos cuando cargue el componente
    useEffect(() => {
        obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    //Revisa si proyecto tiene contenido  
    if(proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;




    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition  key={proyecto.id} timeout={200} className="proyecto">
                    <Proyecto proyecto={proyecto}/>
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;