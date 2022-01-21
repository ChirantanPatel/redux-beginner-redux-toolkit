import React from 'react'
import ParentComponent from '../useCallback/ParentComponent'
import TopNavBar from '../layout/TopNavBar';

function Example9() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 9 (useCallback)</h2>
            <ParentComponent/>
        </div>
    )
}

export default Example9
