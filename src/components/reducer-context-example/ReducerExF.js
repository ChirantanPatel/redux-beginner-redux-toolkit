import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ReducerExF() {

    const countContext = useContext(CountContext)

    return (
        <div>
            Reducer Example F - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button> &nbsp;&nbsp;&nbsp;
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button> &nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default ReducerExF
