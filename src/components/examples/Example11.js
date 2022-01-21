import React from 'react'
import ClassTimer from '../useRef/ClassTimer'
import FocusInput from '../useRef/FocusInput'
import HookTimer from '../useRef/HookTimer'
import TopNavBar from '../layout/TopNavBar';

function Example11() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 11 (useRef)</h2>
            <b> Example A : </b>
            <FocusInput/> <br/>
            <b> Example B : </b>
            <ClassTimer/>
            <HookTimer/>
        </div>
    )
}

export default Example11
