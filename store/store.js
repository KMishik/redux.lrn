import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import logMiddleware from '../middleware/log';
import timeMiddleware from '../middleware/time';
import apiMiddleware from '../middleware/api';

/*
const initialState = {
  recipes: [
    {
      name: 'Omelette'
    },
  ],
  ingredients: [
    {
      recipe: 'Omelette',
      name: 'Egg',
      quantity: 2
    },
  ]
};
*/

const store = createStore(rootReducer, applyMiddleware(timeMiddleware, logMiddleware, apiMiddleware));
//const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;
