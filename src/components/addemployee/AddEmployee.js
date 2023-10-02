import React, { useState } from 'react';
import './AddEmployee.css'
import { useDispatch, useSelector } from 'react-redux';
import { setUserPayload } from '../../features/ListSlice';


const AddEmployee = () => {

    const employees = useSelector(store => store.list);
    const dispatch = useDispatch();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState(0);

    const user = {
        fname: fname,
        lname: lname,
        email: email,
        salary: salary
    }

    const clickHandler = (e) => {
        e.preventDefault()
        dispatch(setUserPayload(user))
        console.log(employees);
    }


    return (
        <div>

            <h2>AddEmployee</h2>
            <form>
                <label htmlFor="fname">First Name</label>
                <input value={fname} onChange={(event) => setFname(event.target.value)} type="text" id="fname" name="firstname" placeholder="Your first name.."></input>

                <label htmlFor="lname">Last Name</label>
                <input value={lname} onChange={(event) => setLname(event.target.value)} type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" placeholder="Your email.."></input>

                <label htmlFor="salary">salary</label>
                <input value={salary} onChange={(event) => setSalary(event.target.value)} type="number" id="salary" name="salary" placeholder="salary"></input>

                <button type="submit" value={user} onClick={() => clickHandler}>add</button>
                <button type='submit' value="Submit">cancel</button>
            </form>
            {console.log(user)}
            {console.log(employees)}
        </div>
    )
}

export default AddEmployee;