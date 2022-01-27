import React from 'react';
import { useSelector } from 'react-redux';

function UserList() {

    // let userList = [{
    //     user_name: 'Chirantan',
    //     email: 'chirantan@gmail.com',
    //     password: '123456',
    //     gender: 'male',
    //     date_of_birth: '21/07/2021',
    //     country: 'india',
    //     technical_skills: "Angular, Reactjs"
    // }]; 
    let userList = useSelector((state) => state.userList.value);

    return (
        <div>
            <table style={{ width: '100%' }}>
               
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Date of birth</th>
                        <th>Country</th>
                        <th>Technical Skills</th>
                    </tr>
                    </thead>
                    <tbody>
                    { userList.length > 0 ?
                        userList.map((user, index) =>
                            <tr key={index}>
                                <td>{user.user_name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.gender}</td>
                                <td>{user.date_of_birth}</td>
                                <td>{user.country}</td>
                                <td>{user.technical_skills}</td>
                            </tr>
                        ) : 
                        <tr>
                                <td colSpan={'7'} style={{textAlign: 'center'}}> No record found </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
