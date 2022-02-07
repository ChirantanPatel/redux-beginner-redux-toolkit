import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from './../../features/user-list';

function UserDetailForm() {
    console.log("call user form page");
    let initialValues = { id : 0, user_name: '', email: '', password: '', gender: 'Male', date_of_birth: '', country: '', technical_skills: '' };
    // let test = { id : 0, user_name: 'asdas', email: 'asdsad', password: '', gender: 'Male', date_of_birth: '', country: '', technical_skills: '' };
    const [formValues, setFormValues] = useState(initialValues); 
    const editUser = useSelector((state) => state.userList.userDetail);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setFormValues(editUser);
    }, [editUser]);

    return (
        <div>
            <h2>User Detail Form</h2>
            <Formik
                initialValues={formValues}
                validate={values => {
                    const errors = {};

                    if (!values.user_name) {
                        errors.user_name = 'Required';
                    }

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }

                    if (!values.date_of_birth) {
                        errors.date_of_birth = 'Required';
                    }

                    if (!values.country) {
                        errors.country = 'Required';
                    }
                    // setFormValues(values);
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        let userData = JSON.parse(JSON.stringify(values));                        
                        if(userData.technical_skills) {
                            userData.technical_skills = userData.technical_skills.join(", ");
                        }
                        actions.resetForm({
                            values: initialValues,
                        });
                        dispatch(userList(userData));
                        actions.setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="user_name"
                                name="user_name"
                                placeholder="User Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.user_name}
                            /> &nbsp;
                            {errors.user_name && touched.user_name && errors.user_name}
                        </div>
                        <br />
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            /> &nbsp;
                            {errors.email && touched.email && errors.email}
                        </div>
                        <br />
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            /> &nbsp;
                            {errors.password && touched.password && errors.password}
                        </div>
                        <br />

                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="gender" value="Male" />
                                &nbsp; Male
                            </label>
                            <label> &nbsp;
                                <Field type="radio" name="gender" value="Female" />
                                &nbsp; Female
                            </label>
                            {/* <div>Gender: {values.gender}</div> */}
                        </div>
                        <br />
                        <div>
                            <input
                                type="date_of_birth"
                                name="date_of_birth"
                                placeholder="Date of birth"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.date_of_birth}
                            /> &nbsp;
                            {errors.date_of_birth && touched.date_of_birth && errors.date_of_birth}
                        </div>
                        <br />

                        <div>
                            {/* <select name="country" id="country" onChange={handleChange} style={{ width: '13.5%' }}>
                                <option value="">-- Select country --</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                            </select> &nbsp;
                            {errors.country && touched.country && errors.country} */}

                            {/* <label htmlFor="country">Select country</label> */}
                            <Field component="select" id="country"
                            onChange={handleChange} 
                                name="country"  multiple={false} >
                                <option value="">-- Select country --</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                            </Field>
                            {errors.country && touched.country && errors.country}
                        </div>
                        <br />

                        <div id="checkbox-group">Technical skills :</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="technical_skills" value="angular" />
                                Angular
                            </label> &nbsp;
                            <label>
                                <Field type="checkbox" name="technical_skills" value="reactjs" />
                                React js
                            </label> &nbsp;
                            <label>
                                <Field type="checkbox" name="technical_skills" value="node" />
                                Node
                            </label> &nbsp;
                            <label>
                                <Field type="checkbox" name="technical_skills" value="java" />
                                Java
                            </label>
                        </div>
                        <br />

                        <button type="submit" className='user-form-submit-btn' disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
             
            {/* {formValues ? JSON.stringify(formValues) : ""} */}
        </div>
    );
}

export default UserDetailForm;
