import React, {useState} from 'react';
import Button from "../Button";
import ModalStudent from "../ModalStudent";

const StudentItem = ({item, idx, deleteStudent, updateStudent}) => {
    const [showModal, setShowModal] = useState(false);

//Этот компонент будет создоваться много раз и  для каждого студента будет СВОЯ переменная State
    const closeModal = () => {
        setShowModal(false)
    }
    const saveData = (data) => {
        updateStudent(item.id, data)
        closeModal()

    }
    return (
        <tbody>
        <tr>
            <td className='py-4 px-3 ' >{idx + 1}</td>
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
                    <Button  title='edit' color='warning' onClick={() => setShowModal(true)}/>
                    <Button  title='delete' color='danger' onClick={() => deleteStudent(item.id)}/>
                </div>
                <ModalStudent show={showModal} //показать
                              hide={setShowModal} //скрыть
                              item={item} //initialValue - для редактирование
                              onSubmit={saveData}/>
            </td>
        </tr>
        </tbody>
    );
};

export default StudentItem;