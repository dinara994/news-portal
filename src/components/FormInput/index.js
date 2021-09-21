import React from 'react';
// autoComplete='off' // отключает подсказку


const FormInput = ({label, name, register, required, errors, errorsMessage, initialValue=''}) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <input type="text" className="form-control"
                   defaultValue={initialValue}
                   {...register(name, {required})}
            />
            {errors.name && <div className='text-danger'>
                {errorsMessage ? errorsMessage : 'Заполните поле.'}
            </div>}

        </>
    );
};

export default FormInput;