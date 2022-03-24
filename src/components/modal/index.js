import React, { useEffect } from 'react';

function Modal ({onClose, currentDay}) {

    useEffect(() => {
        let note = localStorage.getItem(currentDay);
        document.querySelector('#input').textContent = note;
    });

    function saveNote(currentDay) {
        // get note and save to local storage with key of current day
        var input = document.querySelector('#input').value;
        localStorage.setItem(currentDay, input);
    };

    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modal-title'>{currentDay}</h3>
                <p>
                    Notes for the day:
                </p>
                <form>
                    <textarea id="input" className="note-textarea" placeholder="No notes yet!"></textarea>
                </form>
                <button 
                    onClick={() => {saveNote(currentDay)}}
                >
                    Save Notes
                </button>
                <button onClick={onClose} type='button' className="btn btn-secondary">
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Modal;