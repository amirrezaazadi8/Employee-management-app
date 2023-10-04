import React from 'react';
import "./ListEmployee.css"
import List from './List';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListEmployee = () => {

    const employee = useSelector(store => store.list.user);
    const { firstName, lastName, email, salary, date } = employee;

    
    return (
        <div>

            <div className="contain-table">
                {firstName
                    ? <table className="style-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Date</th>
                                <th colSpan="2" className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <List fname={firstName} lname={lastName} email={email} salary={salary} date={date} />
                        </tbody>
                    </table>
                    : <h3>There is no employee !!!</h3>
                }
            </div>

            <div>
                <Link id='link' to="/">back</Link>
            </div>

        </div>
    )
}

export default ListEmployee;