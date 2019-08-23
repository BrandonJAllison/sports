import React from 'react'
import './infomodal.scss'



const Modal = (props) => {

    return (
        <div className='modal-main' style={{ display: props.show ? 'block' : 'none' }}>
            <h2>{props.title}</h2>
            <p style={{ padding: '20px' }}>{props.exp}Some Bullshit and some other shit</p>
        </div>
    );
};

export default Modal