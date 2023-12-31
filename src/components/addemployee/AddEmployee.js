import React, { useState } from 'react';
import './AddEmployee.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, setUserPayload, removeEdit } from '../../features/ListSlice';
import { Link } from 'react-router-dom';
// ---------------------------------------------------------------
const AddEmployee = () => {
    const editUser = useSelector(store => store.list.editEmployee);

    const dispatch = useDispatch();

    const [user, setUser] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            salary: "",
            date: "",
        }
    );

    return (
        <div>
            {editUser.length
                ? editUser.map(edited =>
                    <form key={edited.email}>
                        <h2>Edit Employee</h2>
                        <label htmlFor="fname">First Name</label>
                        <input value={user.firstName} onChange={(event) => setUser({ ...user, firstName: event.target.value })}
                            type="text" id="fname" name="firstname" placeholder={edited.firstName}>
                        </input>

                        <label htmlFor="lname">Last Name</label>
                        <input value={user.lastName} onChange={(event) => setUser({ ...user, lastName: event.target.value })}
                            type="text" id="lname" name="lastname" placeholder={edited.lastName}>
                        </input>

                        <label htmlFor="email">Email</label>
                        <input value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })}
                            type="email" id="email" name="email" placeholder={edited.email}>
                        </input>

                        <label htmlFor="salary">salary</label>
                        <input value={user.salary} onChange={(event) => setUser({ ...user, salary: event.target.value })}
                            type="number" id="salary" name="salary" placeholder={edited.salary}>
                        </input>

                        <label htmlFor="date">date</label>
                        <input value={user.date} onChange={(event) => setUser({ ...user, date: event.target.value })}
                            type="date" id="date" name="date" placeholder={edited.date}>
                        </input>

                        <Link id='link' to='/listemployee' type="submit"
                            onClick={() => {
                                dispatch(setUserPayload(user));
                                dispatch(deleteUser(edited.email));
                                dispatch(removeEdit());
                            }}>
                            add
                        </Link>
                        <Link id='link' to='/' type='submit'>cancel</Link>
                    </form>
                )

                : <form>
                    <h2>Add Employee</h2>
                    <label htmlFor="fname">First Name</label>
                    <input value={user.firstName} onChange={(event) => setUser({ ...user, firstName: event.target.value })}
                        type="text" id="fname" name="firstname" placeholder="Your first name..">
                    </input>

                    <label htmlFor="lname">Last Name</label>
                    <input value={user.lastName} onChange={(event) => setUser({ ...user, lastName: event.target.value })}
                        type="text" id="lname" name="lastname" placeholder="Your last name..">
                    </input>

                    <label htmlFor="email">Email</label>
                    <input value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })}
                        type="email" id="email" name="email" placeholder="Your email..">
                    </input>

                    <label htmlFor="salary">salary</label>
                    <input value={user.salary} onChange={(event) => setUser({ ...user, salary: event.target.value })}
                        type="number" id="salary" name="salary" placeholder="salary">
                    </input>

                    <label htmlFor="date">date</label>
                    <input value={user.date} onChange={(event) => setUser({ ...user, date: event.target.value })}
                        type="date" id="date" name="date" placeholder="date">
                    </input>

                    <Link id='link' to='/listemployee' type="submit" onClick={() => dispatch(setUserPayload(user))}>add</Link>
                    <Link id='link' to='/' type='submit'>cancel</Link>
                </form>
            }

        </div >
    )
}

export default AddEmployee;