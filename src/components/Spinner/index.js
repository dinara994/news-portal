import React from 'react';
// import { SpinnerDotted } from 'spinners-react/lib/esm/SpinnerDotted'


const Spinner = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='spinner-border text-info' role='status'>
                <div>
                    {/*<SpinnerDotted/>*/}
                </div>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
