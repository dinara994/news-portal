import React from 'react';
import Button from "../Button";

const StudentItem = ({item, idx, deleteStudent}) => {
    return (
        <tbody>
        <tr>
            <td className='py-4 px-3 ' scope="row">{idx + 1}</td>
            <td className='py-4 px-4'>{item.name}</td>
            <td className='py-4 px-4'>{item.phone}</td>
            <td className='py-4 px-4'>{item.contract}</td>
            <td className='py-4 px-4'>{item.payoff}</td>
            <td className='py-4 px-4'>{item.laptop}</td>
            <td className='py-4 px-4'>{item.group}</td>
            <td className='py-4 px-4'>{item.status}</td>
            <td className='py-4 px-4'>{item.gender}</td>
            <td className='py-4 px-4'>{item.comment}</td>
            <td className='py-4 px-4'>
                <div className='d-flex'>
                    <Button  title='edit' color='warning'/>
                    <Button  title='delete' color='danger' onClick={() => deleteStudent(item.id)}/>
                </div>
            </td>
        </tr>
        </tbody>
    );
};

export default StudentItem;