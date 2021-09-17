import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";
import Modal from 'react-modal';
import {useForm} from "react-hook-form";


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
                </thead>
                {
                    students.map((item, idx) =>
                        <>
                            <tbody>
                            <tr>
                                <td className='py-4 px-3 ' scope="row">{idx + 1}</td>
                                <td className='py-4 px-4'>{item.name}</td>
                                <td className='py-4 px-4'>{item.phone}</td>
                                <td className='py-4 px-4'>{item.contract}</td>
                            </tr>
                            </tbody>
                        </>
                    )
                }
            </table>
            <button type="button" className="d-block ms-auto btn btn-primary btn-lg"
                    onClick={() => setShowModal(true)}>Add new student
            </button>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}>
                {/*click => start function => 'closeModal'*/}
                <form onSubmit={handleSubmit(sendData)} className="row g-3 mw-50 ">
                    {/*handleSub.=> берет => передает обьект в sendData  с всеми данными(полями) с inputa*/}
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="name"
                            autoComplete='off' // отключает подсказку
                               {...register('name', {required:true, minLength:3})}
                        />
                        {errors.name && <div className='text-danger'>Заполните поле.</div>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Номер телефона</label>
                        <input type="text" className="form-control" id="phone"
                               {...register('phone', {required:true})}
                        />
                        {errors.phone && <div className='text-danger'>Заполните поле.</div>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="money" className="form-label">Сумма контракта</label>
                        <input type="text" className="form-control" id="money"
                               {...register('money', {required:true})}
                        />
                        {errors.money && <div className='text-danger'>Заполните поле.</div>}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="payoff" className="form-label">Оплата</label>
                        <input type="text" className="form-control" id="payoff"
                               {...register('payoff', {required:true})}
                        />
                        {errors.payoff && <div className='text-danger'>Заполните поле.</div>}
                    </div>
                    <div className="col-md-6 ">
                        <label htmlFor="laptop" className="form-label">Ноутбук</label>
                        <input type="text" className="form-control w-100" id="laptop"
                               {...register('laptop', {required:true})}
                        />
                        {errors.laptop && <div className='text-danger'>Заполните поле.</div>}
                    </div>
                </form>
                <div className='d-flex my-2'>
                    <select id="inputState" class="form-select" {...register('group', {required:true})}>
                        <option selected value="Выберите">Группа...</option>
                        <option value="morning">2-й поток утро</option>
                        <option value="night">2-й поток вечер</option>
                    </select>
                    <select id="inputState" class="form-select" {...register('status', {required:true})}>
                        <option selected value="статус">Выберите варианты...</option>
                        <option value="morning">Резидент</option>
                        <option value="night"></option>
                    </select>
                    <select id="inputState" class="form-select" {...register('gender', {required:true})}>
                        <option selected value="Выберите">Выберите...</option>
                        <option value="0">Парень</option>
                        <option value="1">Девушка</option>
                    </select>
                </div>
                <div>
                    <p>Сообщение</p>
                    <textarea className='p-2' name="comment" id="comment" placeholder='Comments...'></textarea>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary d-block ms-auto">Add students</button>
                </div>
            </Modal>
            {/*Киевская Орозбекова/Турусбекова*/}
            {/*Кожомамбето Ислам*/}






        </div>
    );
};


export default Students;