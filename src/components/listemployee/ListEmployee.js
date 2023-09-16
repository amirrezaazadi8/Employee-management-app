import React from 'react';
import "./ListEmployee.css"

const ListEmployee = () => {
    return (
        <div>

            <div class="contain-table">
                <table class="style-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Date</th>
                            <th colspan="2" class="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Susan</td>
                            <td>Jordon</td>
                            <td>susan@example.com</td>
                            <td>$95,000</td>
                            <td>2019-04-11 </td>
                            <td class="text-right"><button class="button muted-button">Edit</button></td>
                            <td class="text-left"><button class="button muted-button">Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Adrienne</td>
                            <td>Doak</td>
                            <td>adrienne@example.com</td>
                            <td>$80,000</td>
                            <td>2019-04-17 </td>
                            <td class="text-right"><button class="button muted-button">Edit</button></td>
                            <td class="text-left"><button class="button muted-button">Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rolf</td>
                            <td>Hegdal</td>
                            <td>rolf@example.com</td>
                            <td>$79,000</td>
                            <td>2019-05-01 </td>
                            <td class="text-right"><button class="button muted-button">Edit</button></td>
                            <td class="text-left"><button class="button muted-button">Delete</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Kent</td><td>Rosner</td>
                            <td>kent@example.com</td>
                            <td>$56,000</td>
                            <td>2019-05-03 </td>
                            <td class="text-right"><button class="button muted-button">Edit</button></td>
                            <td class="text-left"><button class="button muted-button">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListEmployee;