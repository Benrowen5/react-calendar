import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calendar from './components/calendar';


function App() {

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };
  
  return (
    <div className="App">
      {{isCalendarOpen} ? (
        <Calendar 
          isCalendarOpen={isCalendarOpen}
          toggleCalendar={toggleCalendar}/>
      ) : (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my React calendar app.
        </p>
        <button onClick={() => {
          toggleCalendar();
        }}>
          Go to Calendar
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      )}
      
      <main>
      
      </main>
    </div>
  );
}

export default App;
