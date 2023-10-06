import React from 'react';
import './List.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../features/ListSlice';

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
                <button className="button muted-button" onClick={() => dispatch(editUser(email))}>
                    <Link id='edit' to='/addemployee'>
                        Edit
                    </Link>
                </button>
            </td>
            <td className="text-left">
                <button className="button muted-button" onClick={() => dispatch(deleteUser(email))}>Delete</button>
            </td>
        </tr>
    )
}

export default List;
