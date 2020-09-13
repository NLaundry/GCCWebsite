import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import AboutPage from '../AboutPage/AboutPage'
import HomePage from '../HomePage/HomePage'

function App() {
    return (
        <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </Router>
    );
}

export default App;
