import React from 'react'
import CounterOne from '../CounterOne'
import CounterThree from '../CounterThree'
import CounterTwo from '../CounterTwo'
import TopNavBar from '../layout/TopNavBar';

function Example4() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 4</h2>
            <CounterOne/>  <br/><br/>
            <CounterTwo/>  <br/><br/>
            <CounterThree/>  <br/><br/>
        </div>
    )
}

export default Example4
