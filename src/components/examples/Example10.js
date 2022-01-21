import React from 'react'
import UseMemoCounter from '../useMemo/UseMemoCounter'
import TopNavBar from '../layout/TopNavBar';

function Example10() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 10 (useMemo)</h2>
            <UseMemoCounter/>
        </div>
    )
}

export default Example10
