import React from 'react'
import DataFetchingOne from '../data-fetch/DataFetchingOne'
import DataFetchingTwo from '../data-fetch/DataFetchingTwo'
import TopNavBar from '../layout/TopNavBar';

function Example8() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 8 (Fetching data with useReducer)</h2>
            <b> Example A : </b>
            <DataFetchingOne/>
            <b> Example B : </b>
            <DataFetchingTwo/>
        </div>
    )
}

export default Example8
