import React from 'react'
import './infomodal.scss'



const Modal = (props) => {

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h2>{props.title}</h2>
                <p style={{ padding: '20px' }}>{props.exp}</p>
                <button type="button" onClick={props.handleClose}>
                    close
                    </button>
            </section>
        </div>
    );
};

export default Modal