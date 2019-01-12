import React, { Component } from 'react'; 
import {
    BrowserRouter as Router, 
    Route, 
}   from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Timer from './Timer';
import DisplayQuiz from './DisplayQuiz';
import MyAccount from './MyAccount';
import Results from './Results';
import Settings from './Settings';


class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>What do you want to be tested on?</h1>
                    <Route path =  '/' exact component = {Login} /> 
                    <Route path = '/register' component = {Register} />
                    <Route path = '/timer' component = {Timer} />
                    <Route path = '/question/:categoryId/:levelSelection' component = {DisplayQuiz} />
                    
                    <Route path = '/myaccount' component = {MyAccount} />
                    <Route path = '/results' component = {Results} />
                    <Route path = '/settings' component = {Settings} />
                </div>
            </Router>
        );
    }
    
}


export default Home;