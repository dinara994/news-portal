import React from 'react';

const FormInput = () => {
    return (
        <>
            <label htmlFor="name" className="form-label">Имя</label>
            <input type="text" className="form-control" id="name"
                   autoComplete='off' // отключает подсказку
                   {...register('name', {required:true, minLength:3})}
            />
            {errors.name && <div className='text-danger'>Заполните поле.</div>}

        </>
    );
};

export default FormInput;