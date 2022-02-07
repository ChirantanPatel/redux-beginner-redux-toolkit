import React from 'react';
import { useSelector , useDispatch} from 'react-redux'; 
import { editUser } from '../../features/user-list';

function UserList() {
    console.log("call user list page");
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
    const dispatch = useDispatch();
    
    function editUserDetail(params,id) {
        debugger
        let reqData = JSON.parse(JSON.stringify(params));
        reqData.id = id;
        dispatch(editUser(reqData));
    }

    function deleteUser(index) {
        debugger
    }

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
                        <th>Actions</th>
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
                                <td> 
                                    <button type="button" onClick={() => editUserDetail(user,index)} > Edit </button> &nbsp;&nbsp;
                                    <button type="button" onClick={() => deleteUser(index)} > Delete </button>
                                </td>
                            </tr>
                        ) : 
                        <tr>
                                <td colSpan={'8'} style={{textAlign: 'center'}}> No record found </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
