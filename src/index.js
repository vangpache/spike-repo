import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {takeEvery, put } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

////WATCHER SAGA
function* rootSaga() {
    yield takeEvery('GET_BOOKS_SEARCHED', getBooks)
    // yield takeEvery('IMAGE_UPLOAD', getProfileImage)
    yield takeEvery('UPLOAD_FILE', uploadFile)
}

////SAGAS
function* uploadFile(action) {
    try {
        yield axios.post('/files', action.payload)
    } catch (error) {
        console.log('error in uploadFile saga:', error);
    }
}

function* getBooks(action) {
    try {
        let response = yield axios.get(`/books/${action.payload}`)
        console.log('in getBooks:', response);
        yield put({
            type: 'SET_BOOKS',
            payload: response.data.GoodreadsResponse.search.results.work
        })
    } catch (error) {
        console.log('error in getBooks');
    }
}

function* getProfileImage(action) {
    try {
        yield put({
            type: 'SET_PROFILE_PICTURE',
            // payload: action.payload
        })
    } catch (error) {
        console.log('in getProfileImage error:', error);
    }
}

////REDUCERS
const books = (state = [], action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return action.payload;
        default:
            return state
    }
}

const profilePicture = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROFILE_PICTURE':
            console.log(action.payload);
            
            return action.payload;
        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers ({
        books,
        profilePicture
    }),
    applyMiddleware(sagaMiddleware, logger)
)


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
