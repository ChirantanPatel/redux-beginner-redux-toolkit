import React from 'react'
import useCounter from './hooks/useCounter';

function CustomHookCounterTwo() {

    const [count,increment,decrement,reset] = useCounter(10,10);

    return (
        <div>
            <b>Custom Hook (Counter) = {count} &nbsp;&nbsp; </b> 
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHookCounterTwo
