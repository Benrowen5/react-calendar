import React from 'react';

function Calendar (props) {

    return (
        <div>
            <h2>Calendar</h2>
          <button onClick={() => {
            props.toggleCalendar();
            }}>
                Go Back
            </button>
        </div>
        
    )

}

export default Calendar;