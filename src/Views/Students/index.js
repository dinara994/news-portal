import React, {useEffect, useState} from 'react';
import './style.css'
import axios from "axios";
import StudentItem from "../../components/StudentItem";
import Button from "../../components/Button";
import ModalStudent from "../../components/ModalStudent";
//валидация полей


const Students = () => {
    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false);


    const sendData = (data) => {
        axios.post('https://613f1faee9d92a0017e17474.mockapi.io/students', data) //отправил данные на backand
            .then(({data: student}) => {
                setStudents([...students, student]) //получил результат добавь студента в []
                setShowModal(false) //выключи модалку

            })
    }
    const deleteStudent = (id) => {
        axios.delete(`https://613f1faee9d92a0017e17474.mockapi.io/students/${id}`)
            .then(() => setStudents((students.filter(item => item.id !== id))))
    }
    //функция РЕДАКТОР
    const updateStudent = (id, obj) => {
        axios.put(`https://613f1faee9d92a0017e17474.mockapi.io/students/${id}`, obj) //отправляет запрос на сервер с ОДНИМ студентом
            //в одном obj могут быть много ключей, а вэтом только может быть только ключ phone и обновит только phone. те ключи которые перес-ся обновляет, которые НЕПЕРЕСЕКАЮТСЯ добавляет, а которых НЕТ то ничего не делает
            .then(() => setStudents(students.map(el => el.id === id ? {...el, ...obj} : el)))
//если совпало id, вместо него верни {верни все из item, все из obj} иначе верни item
    }

    useEffect(() => {
        axios('https://613f1faee9d92a0017e17474.mockapi.io/api/students')
            .then(({data}) => setStudents(data))
    }, [])


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
                {students.map((item, idx) =>
                    <StudentItem key={item.id} item={item} idx={idx}
                                 deleteStudent={deleteStudent}
                                 updateStudent={updateStudent}
                    />)}
            </table>
            <Button onClick={() => setShowModal(true)}
                    title='Add new students'/>

            {/*Киевская Орозбекова/Турусбекова*/}
            {/*Кожомамбето Ислам*/}
            <ModalStudent show={showModal}
                          hide={setShowModal}
                          onSubmit={sendData}
            />
        </div>
    );
};


export default Students;