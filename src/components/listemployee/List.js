import React from 'react';
import store from '../../app/Store'

const List = () => {

    console.log(store);
    return (
        <tr>
            <td>1</td>
            <td>Susan</td>
            <td>Jordon</td>
            <td>susan@example.com</td>
            <td>$95,000</td>
            <td>2019-04-11 </td>
            <td className="text-right"><button className="button muted-button">Edit</button></td>
            <td className="text-left"><button className="button muted-button">Delete</button></td>
        </tr>
    )
}

export default List;