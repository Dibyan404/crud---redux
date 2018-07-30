import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



import postReducer from './Reducers/postReducers';
const store = createStore(postReducer);




ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>
// The provider component uses something called React Context 
// which allows us to pass the store object to any components that 
// needs to access it without the need to pass the props.

// Here we are wrapping the App Component which is our parent component
// with the Provider component so that all the child components
// in our app can get access to the store.

// The Provider component take the store as a prop
, document.getElementById('root'));
