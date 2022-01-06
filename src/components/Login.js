import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../features/user'

function Login() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    function loginUser() {

        dispatch(login({ name : "Chirantan", age : 10, email : "chirantan@gmail.com" }));

    }

    function logoutUser() {
        dispatch(logout());
    }
 
    return (
        <div>
            { !user.name ? 
                <button onClick={loginUser} >
                    Login
                </button>
                :
                <button onClick={logoutUser} >
                    Logout
                </button>
            }
        </div>
    )
}

export default Login;