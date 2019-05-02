import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

import { DB_CONFIG } from './Config.js'

var app = firebase.initializeApp(DB_CONFIG);

fetch('./data/products.json')
.then(resp => resp.json()) 
.then(({products}) => {
ReactDOM.render(<App products={products} app={app}/>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();