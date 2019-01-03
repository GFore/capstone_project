import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
    Route, 
}   from 'react-router-dom';
import './App.css';
import Capstone from './Capstone';
// import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Capstone />
                </Router>
            </div>
        );
    }
}

export default App;


{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}