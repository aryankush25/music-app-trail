import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.css';
import App from './Components/App';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDguDEKzD6TkdleZbbiQHpJEsHON1_kYmk",
    authDomain: "fir-react-starter-f6af1.firebaseapp.com",
    databaseURL: "https://fir-react-starter-f6af1.firebaseio.com",
    projectId: "fir-react-starter-f6af1",
    storageBucket: "",
    messagingSenderId: "418348968746"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));