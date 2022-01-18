import React, { useMemo, useState } from 'react'

function UseMemoCounter() {

    const [counterOne, setCountOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne]);

    return (
        <div>
            <div>
                <button onClick={incrementOne} >Counter one - {counterOne}</button> &nbsp;&nbsp;&nbsp;
                <span> {isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo} >Counter two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoCounter
