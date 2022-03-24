import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

function Main () {
    
    return (
        <section className="App-header">
            <h1>
                Welcome to my React calendar app.
            </h1>
            <p>Click the button to go to the calendar.</p>
            <p>This application is an interactive calendar which allows users to save notes or tasks to any day of the month.</p>
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learn React
            </a>
        </section>
    )
}

      export default Main;