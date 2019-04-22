import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

//need a saga for getting characters
//pass them to characterList reducer
//then update the redux store


//Character list is a reducer that will hold characters from the server
const searchResults = (state=[{Search: ''}], action) => {
    if (action.type === 'SET_SEARCH_RESULTS'){
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();







const reduxStore = createStore(
    combineReducers({
        searchResults,

    }),
    applyMiddleware(logger, sagaMiddleware)
)
// sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();