import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import StudentItem from "../../components/StudentItem";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
//валидация полей


const Students = () => {
    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false);
const {register, handleSubmit, formState:{errors}, reset} = useForm()
    //{errors(для выведение текст ошибки), reset()очистка формы


    const closeModal = () => {
        setShowModal(false)
    }
    const sendData = (data) => {
axios.post('https://613f1faee9d92a0017e17474.mockapi.io/students', data) //отправил данные на backand
    .then(({data:student}) => {
        setStudents([...students, student]) //получил результат добавь студента в []
        setShowModal(false) //выключи модалку
        reset()//очисти форму
    })
    }
    const deleteStudent = (id) => {
    axios.delete(`https://613f1faee9d92a0017e17474.mockapi.io/students/${id}`)
        .then(() => setStudents((students.filter(item => item.id !== id))))
    }

    useEffect(() => {
        axios('https://613f1faee9d92a0017e17474.mockapi.io/api/students')
            .then(({data}) => setStudents(data))
    },[])


    const customStyles = {//вынесли отдельно обьект и передали в <Modal/>
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className='container my-5'>
            <table className="table table-striped caption-top  justify-content-center align-items-center">
                <thead className="table-light bg-light   text-uppercase border-dark">
                <th className="col py-4 px-4 ">N</th>
                <th className="col py-3 px-2">Name</th>
                <th className="col py-3 px-2">Phone</th>
                <th className="col py-3 px-2'">Contract</th>
                <th className="col py-3 px-2'">Payoff</th>
                <th className="col py-3 px-2'">Laptop</th>
                <th className="col py-3 px-2'">Group</th>
                <th className="col py-3 px-2'">Status</th>
                <th className="col py-3 px-2'">Gender</th>
                <th className="col py-3 px-2'">Сomment</th>
                </thead>
                {students.map((item, idx) => <StudentItem key={item.id} item={item} idx={idx} deleteStudent={deleteStudent}/>)}
            </table>
            <Button  onClick={() => setShowModal(true)} title='Add new students'/>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}>
                {/*click => start function => 'closeModal'*/}
                <form onSubmit={handleSubmit(sendData)} className="row g-3 mw-50 ">
                    {/*handleSub.=> берет => передает обьект в sendData  с всеми данными(полями) с inputa*/}
                    <div className="col-md-6">
                        <FormInput
                        label='Ведите имя'
                        name='name'
                        register={register}
                        errors={errors}
                        required
                        />
                    </div>
                    <div className="col-md-6">
                        <FormInput
                            label='Ведите номер'
                            name='phone'
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <FormInput
                            label='Контракт'
                            name='contract'
                            register={register}
                            errors={errors}
                            errorsMessage='И э то поле нужно заполнить!'
                            required
                        />
                   </div>
                    <div className="col-md-6">
                        <FormInput
                            label='Оплата'
                            name='payoff'
                            register={register}
                            errors={errors}
                            required
                        />
                   </div>
                    <div className="col-md-6 ">
                        <FormInput
                            label='Ноутбук'
                            name='laptop'
                            register={register}
                            errors={errors}
                            required
                        />
                    </div>
                <div className='d-flex my-2'>
                    <select id="inputState" className="form-select" {...register('group', {required:true})}>
                        <option selected value="Выберите">Группа...</option>
                        <option value="2-п утро">2-п утро</option>
                        <option value="2-п вечер">2-п вечер</option>
                    </select>
                    <select id="inputState" className="form-select" {...register('status', {required:true})}>
                        <option selected value="статус">Выберите варианты...</option>
                        <option value="resident">Резидент</option>
                        <option value="active">Active</option>
                    </select>
                    <select id="inputState" className="form-select" {...register('gender', {required:true})}>
                        <option selected value="Выберите">Выберите...</option>
                        <option value="Парень">Парень</option>
                        <option value="Девушка">Девушка</option>
                    </select>
                </div>
                <div>
                    <p>Сообщение</p>
                    <textarea   className='p-2' name="comment" id="comment" placeholder='Comments...'
                              {...register('comment')}
                    ></textarea>
                </div>
                    <Button  title='Add'/>
                </form>
            </Modal>
            {/*Киевская Орозбекова/Турусбекова*/}
            {/*Кожомамбето Ислам*/}

        </div>
    );
};


export default Students;