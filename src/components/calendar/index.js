import React, { useState}  from 'react';
import Modal from '../modal';

function Calendar () {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'November', 'December'];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var date = new Date();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var days;
    
    switch (month) {
        // February
        case 1:
            var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
            days = leapYear ? 29 : 28;
            break;
        case 3: case 5: case 8: case 10:
            days = 30;
            break;
        default:
            days = 31;
    }
    var arr = Array.from({length: days}, (v, i) => i);

    var firstOfMonth = new Date(month + ' 1, ' + year);
    var getDayOfFirstOfMonth = firstOfMonth.getDay();
    var emptyDays = Array.from({length: getDayOfFirstOfMonth}, (v, i) => i);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState();
    
    const toggleModal = (day) => {
        setCurrentDay(month + ' ' + day +', ' + year);
        setIsModalOpen(!isModalOpen);
    }   

    return (
        <div className="calendar-wrapper">
            {isModalOpen && (
                <Modal 
                    currentDay={currentDay}
                    onClose={toggleModal}/>
            )}
            <div className='calendar-month'>
                <section className='calendar-header'>
                    <h3>{month}</h3>
                </section>
                <section className="days">
                    {week.map(dayName => (
                        <div
                            key={dayName}
                        >
                            {dayName}
                        </div>
                    ))}
                </section>
                <section className="dates">
                    {/* map empty days to start day in month on correct day of week */}
                    {emptyDays.map(empty => (
                        <div key={empty}></div>
                    ))}
                    {/* map days in month based on current month */} 
                    {arr.map(day => (
                        <div
                            key={day+1}
                            onClick={() => {
                                toggleModal(day+1)}}
                        >
                            {day+1}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Calendar;