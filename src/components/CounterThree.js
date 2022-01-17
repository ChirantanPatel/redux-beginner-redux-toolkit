import React, { useReducer } from 'react';

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

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo , dispatchTwo] = useReducer(reducer, initialState)
    
    return (
        <div>
            <div> <h3> Multiple useReducers </h3> </div>
            <div>Counter One - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch('decrement')}>Decrement</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatch('reset')}>Reset</button> &nbsp;&nbsp;&nbsp;

             
            <div>Counter Two - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => dispatchTwo('reset')}>Reset</button> &nbsp;&nbsp;&nbsp;

        </div>
    )
}

export default CounterThree
