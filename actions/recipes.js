import { ADD_RECIPE, FETCH_RECIPES, SET_RECIPES } from '../constants/action-types';

const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name
});

const fetchRecipes = () => ({
    type: FETCH_RECIPES,
});

const setRecipes = (recipes) => ({
    type: SET_RECIPES,
    recipes
});

export { addRecipe, fetchRecipes, setRecipes };
