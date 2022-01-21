import React, { useReducer } from 'react'
import ReducerExA from '../reducer-context-example/ReducerExA';
import ReducerExB from '../reducer-context-example/ReducerExB';
import ReducerExC from '../reducer-context-example/ReducerExC';
import TopNavBar from '../layout/TopNavBar';

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
    
    switch(action) {
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :   
            return initialState;
        default :
            return state 
    }

}
function Example6() {

    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <TopNavBar/>
            <h2>Example 6 (useReducer with useContext)</h2>
            <CountContext.Provider value={{ countState : count, countDispatch : dispatch }}>  
            
                    Count - {count}
                    <ReducerExA/>
                    <ReducerExB/>
                    <ReducerExC/>
               
            </CountContext.Provider>
        </div>
    )
}

export default Example6
