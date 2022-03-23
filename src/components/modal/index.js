import React from 'react';

function Modal ({onClose, currentDay}) {
    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modal-title'>{currentDay}</h3>
                <p>
                    Notes for the day:
                </p>
                <textarea className="note-textarea" placeholder="Note Text"></textarea>
                <button>Save Notes</button>
                <button onClick={onClose} type='button' className="btn btn-secondary">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Modal;