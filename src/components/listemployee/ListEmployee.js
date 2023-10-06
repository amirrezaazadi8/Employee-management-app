import React from 'react';
import "./ListEmployee.css"
import List from './List';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListEmployee = () => {

    const employees = useSelector(store => store.list.allEmployees);
    
    return (
        <div>

            <div className="contain-table">
                {employees.length
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
                            {employees.map(employee => {
                                const { firstName, lastName, email, salary, date } = employee;
                                const i = employees.indexOf(employee) + 1;
                                return (< List
                                    key={i}
                                    num={i}
                                    fName={firstName}
                                    lName={lastName}
                                    email={email}
                                    salary={salary}
                                    date={date}
                                />)

                            })}
                        </tbody>
                    </table>
                    : <h3>There is no employee !!!</h3>
                }
            </div>

            <div>
                <Link id='link' to="/">back</Link>
                <Link id='link' to="/addemployee">add some one</Link>
            </div>

        </div>
    )
}

export default ListEmployee;