import React from 'react'
import { Link } from 'react-router-dom'

function TopNavBar() {
    return (
        <div>
            <h2>Welcome to Example</h2>
                <ul>
                    <li> <Link to="/login"> Example 1  </Link> </li>
                    <li> <Link to="/example2"> Example 2  </Link> </li>
                    <li> <Link to="/example3"> Example 3  </Link> </li>
                    <li> <Link to="/example4"> Example 4  </Link> </li>
                    <li> <Link to="/example5"> Example 5  </Link> </li>
                    <li> <Link to="/example6"> Example 6  </Link> </li>
                    <li> <Link to="/example7"> Example 7  </Link> </li>
                    <li> <Link to="/example8"> Example 8  </Link> </li>
                    <li> <Link to="/example9"> Example 9  </Link> </li>
                    <li> <Link to="/example10"> Example 10 </Link> </li>
                    <li> <Link to="/example11"> Example 11 </Link> </li>
                    <li> <Link to="/example12"> Example 12 </Link> </li>
                    <li> <Link to="/example13"> Example 13 </Link> </li>
                </ul>
        </div>
    )
}

export default TopNavBar
