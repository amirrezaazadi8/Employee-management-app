import React from 'react';
import "./ListEmployee.css"
import List from './List';

const ListEmployee = () => {
    return (
        <div>

            <div className="contain-table">
                <table className="style-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Date</th>
                            <th colSpan="2" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List />
                        <tr>
                            <td>2</td>
                            <td>Adrienne</td>
                            <td>Doak</td>
                            <td>adrienne@example.com</td>
                            <td>$80,000</td>
                            <td>2019-04-17 </td>
                            <td className="text-right"><button className="button muted-button">Edit</button></td>
                            <td className="text-left"><button className="button muted-button">Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rolf</td>
                            <td>Hegdal</td>
                            <td>rolf@example.com</td>
                            <td>$79,000</td>
                            <td>2019-05-01 </td>
                            <td className="text-right"><button className="button muted-button">Edit</button></td>
                            <td className="text-left"><button className="button muted-button">Delete</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kent</td><td>Rosner</td>
                            <td>kent@example.com</td>
                            <td>$56,000</td>
                            <td>2019-05-03 </td>
                            <td className="text-right"><button className="button muted-button">Edit</button></td>
                            <td className="text-left"><button className="button muted-button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListEmployee;