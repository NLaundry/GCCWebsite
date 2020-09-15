import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import AboutPage from './containers/AboutPage/AboutPage'
import HomePage from './containers/HomePage/HomePage'

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: red[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </ThemeProvider>
        </Router>
    );
}

export default App;
