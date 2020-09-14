import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCU91gAhbjcCauwJnWWeEM3KLT_AQ8QZlg",
    authDomain: "gcc-website-2638e.firebaseapp.com",
    databaseURL: "https://gcc-website-2638e.firebaseio.com",
    projectId: "gcc-website-2638e",
    storageBucket: "gcc-website-2638e.appspot.com",
    messagingSenderId: "1079146980399",
    appId: "1:1079146980399:web:69fe9ec56dd61c5ec9d2da",
    measurementId: "G-L9FNLBLWKD"
})


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
