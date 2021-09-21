import React from 'react';
import Modal from "react-modal";
import FormInput from "../FormInput";
import Button from "../Button";
import {useForm} from "react-hook-form";

const ModalStudent = ({show, hide, onSubmit, item={}}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    //{errors(проверка данных текст ошибки), onSubmit(handleSubmit)-чтоб мог проверить поля на заполнение, reset()очищает формы

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
    const closeModal = () => {
        hide(false)
    }
    const sendForm = (data) => {
        onSubmit(data)
        reset()
    }

    return (
        <Modal
            isOpen={show}
            onRequestClose={closeModal}
            style={customStyles}>
            {/*click => start function => 'closeModal'*/}
            <form onSubmit={handleSubmit(sendForm)} className="row g-3 mw-50 ">
                {/*handleSub.=> берет => передает обьект в sendData  с всеми данными(полями) с inputa*/}
                <div className="col-md-6">
                    <FormInput
                        label='Ведите имя'
                        name='name'
                        register={register}
                        errors={errors}
                        initialValue={item.name}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <FormInput
                        label='Ведите номер'
                        name='phone'
                        register={register}
                        errors={errors}
                        initialValue={item.phone}
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
                        initialValue={item.contract}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <FormInput
                        label='Оплата'
                        name='payoff'
                        register={register}
                        errors={errors}
                        initialValue={item.payoff}
                        required
                    />
                </div>
                <div className="col-md-6 ">
                    <FormInput
                        label='Ноутбук'
                        name='laptop'
                        register={register}
                        errors={errors}
                        initialValue={item.laptop}
                        required
                    />
                </div>
                <div className='d-flex my-2'>
                    <select id="inputState" initialValue={item.group} className="form-select" {...register('group', {required:true})}>
                        <option selected defaultValue="Выберите">Группа...</option>
                        <option value="2-п утро">2-п утро</option>
                        <option defaultValue="2-п вечер">2-п вечер</option>
                    </select>
                    <select id="inputState" initialValue={item.status} className="form-select" {...register('status', {required:true})}>
                        <option selected value="статус">Выберите варианты...</option>
                        <option value="resident">Резидент</option>
                        <option value="active">Active</option>
                    </select>
                    <select id="inputState" initialValue={item.gender} className="form-select" {...register('gender', {required:true})}>
                        <option selected value="Выберите">Выберите...</option>
                        <option value='парень'>Парень</option>
                        <option value="Девушка">Девушка</option>
                    </select>
                </div>
                <div>
                    <p>Сообщение</p>
                    <textarea defaultValue={item.comment}  className='p-2' name="comment" id="comment" placeholder='Comments...'
                                {...register('comment')}
                    ></textarea>
                </div>
                <Button  title='Add'/>
            </form>
        </Modal>
    );
};

export default ModalStudent;