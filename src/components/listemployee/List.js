import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../features/ListSlice';

const List = ({ num, fName, lName, email, salary, date }) => {

    const dispatch = useDispatch();
    
    return (
        <tr>
            <td>{num}</td>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{email}</td>
            <td>{salary} $</td>
            <td>{date}</td>
            <td className="text-right">
                <button className="button muted-button">Edit</button>
            </td>
            <td className="text-left">
                <button className="button muted-button" onClick={() => dispatch(deleteUser(email))}>Delete</button>
            </td>
        </tr>
    )
}

export default List;
