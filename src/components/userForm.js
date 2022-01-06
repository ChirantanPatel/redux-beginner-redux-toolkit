import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userFormUpdate } from '../features/user';

function UpdateUserForm() {
    console.log("UpdateUserForm");
    
    const user = useSelector((state) => state.user.value);
    let [formData, setFormData] = useState(user);
    
    const dispatch =  useDispatch();

    useEffect(() => {
        setFormData(user);
    }, [user]);

    function updateFormData() {
        console.log("Updated Data", formData);
        setFormData(formData);
        dispatch(userFormUpdate(formData));
    }

    const handleInputChange = (key,event) => {
        setFormData({...formData , [key] : event.target.value});
    }

    return (
        <div>
            <input type="text" placeholder="Name"  value={formData.name} onChange={(event) => {handleInputChange('name',event)}} /> <br/><br/>
            <input type="text" placeholder="Age"   value={formData.age} onChange={(event) => {handleInputChange('age',event)}} /> <br/><br/>
            <input type="text" placeholder="Email" value={formData.email} onChange={(event) => {handleInputChange('email',event)}} /> <br/><br/>
         
            <button onClick={updateFormData}> Update</button>
        </div>
    )

}

export default UpdateUserForm;