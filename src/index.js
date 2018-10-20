import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Questions from './components/questions';
import Header from './components/header';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import questionReducer from './reducers/question';
import { Provider } from 'react-redux';
import store from './store';
import AskQuestion from './components/ask-question';
import { BrowserRouter as Router } from 'react-router-dom';

// import { reducer as formReducer } from 'redux-form';

// const store = createStore(questionReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
