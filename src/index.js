import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './Routes';
import Pooling from './Pooling';
import Create from './Create';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBll_oanbXLq-s_g7Tbp9hM6UwHkjaTBhI",
  authDomain: "todoapp-11111.firebaseapp.com",
  databaseURL: "https://todoapp-11111.firebaseio.com",
  projectId: "todoapp-11111",
  storageBucket: "todoapp-11111.appspot.com",
  messagingSenderId: "937490587630"
};
firebase.initializeApp(config);
ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
