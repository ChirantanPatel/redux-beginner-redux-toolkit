import React from 'react'
import useInput from './hooks/useInput';

function UserFormCustomHook() {

    const [firstName, bindFirstName, resetFirstName] = useInput ('');
    const [lastName, bindLastName, resetLastName] = useInput ('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <b>Custom Hook (useInput) &nbsp;&nbsp; </b> 
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name : &nbsp;</label>
                    <input  type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name : &nbsp;</label>
                    <input  type="text"  {...bindLastName} />
                </div>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default UserFormCustomHook
