import React, { useState } from 'react';
import Calendar from './components/calendar';
import Main from './components/main'

function App() {
  const button = ['Go to main', 'Go to calendar'];

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [buttonState, setButtonState] = useState(button[1]);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setButtonState(() => {
      if(buttonState === button[0]) {
        setButtonState(button[1]);
      } else {
        setButtonState(button[0]);
      }
    });
  };

  const renderItem = () => {
    switch (buttonState) {
      case 'Go to main':
        return <Calendar />
      case 'Go to calendar':
        return <Main />

    }
  }
  
  return (
    <div className="App">
      <button onClick={toggleCalendar}>
        {buttonState}
      </button>      
      <main>
        {renderItem(buttonState)}
      </main>
    </div>
  )
}

export default App;
