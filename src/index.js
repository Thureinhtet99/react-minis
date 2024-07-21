import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  searchField: ""
};

// Define the reducer
const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};


// Create the Redux store
const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);