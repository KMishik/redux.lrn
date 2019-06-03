import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import logMiddleware from '../middleware/log';

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

const store = createStore(rootReducer, initialState,  applyMiddleware(logMiddleware));
//4const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
