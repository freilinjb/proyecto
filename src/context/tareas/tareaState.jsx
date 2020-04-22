import React, {useReducer} from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [],
    }

    //crear dispath y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{}}>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;