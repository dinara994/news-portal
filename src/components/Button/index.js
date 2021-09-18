import React from 'react';

const Button = ({onClick, title, color='primary'}) => {
    //color - default(поумолчанию) значение
    return (
            <button onClick={onClick}
                     className={`d-block ms-auto btn btn-${color} btn-lg`}>{title}
            </button>

    );
};

export default Button;