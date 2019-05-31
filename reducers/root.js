import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});

/*
const rootReducer = (state,action) => {
  return Object.assign(
    {}, state, {
      recipes: recipesReducer(state.recipes, action),
      ingredients: ingredientsReducer(state.ingredients, action)
    }
  );
};

export default  rootReducer;
*/

