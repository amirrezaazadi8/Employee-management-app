import React from 'react';

const List = ({fname,lname,email,salary,date}) => {

    return (
        <tr>
            <td>1</td>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{email}</td>
            <td>{salary} $</td>
            <td>{date}</td>
            <td className="text-right"><button className="button muted-button">Edit</button></td>
            <td className="text-left"><button className="button muted-button">Delete</button></td>
        </tr>
    )
}

export default List;