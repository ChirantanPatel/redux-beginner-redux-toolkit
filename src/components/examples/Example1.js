import React from 'react'
import { useSelector } from 'react-redux';
import Login from '../Login';
import Profile from '../Profile';
import ChangeColor from '../ChangeColor';
import UpdateUserForm from '../UpdateUserForm';
import TopNavBar from '../layout/TopNavBar';

function Example1() {

    const user = useSelector((state) => state.user.value);

    return (
        <div>
            <TopNavBar/>
            <h2>Example 1</h2>
            <Profile />
            <Login /> <br /> <br />

            <h2>Form Update</h2>
            <ChangeColor /> <br /><br />
            {user.name ?
                <UpdateUserForm /> : null
            } <br /><br />
        </div>
    )
}

export default Example1
