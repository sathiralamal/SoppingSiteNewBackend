import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//cc x
//global.name="";
global.backend="https://0xo0pfdf86.execute-api.us-east-1.amazonaws.com/prod";
global.backendSoket="https://0xo0pfdf86.execute-api.us-east-1.amazonaws.com/prod:3030";
//console.log("this is name"+global.name)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
