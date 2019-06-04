import { ADD_INGREDIENT, SET_INGREDIENTS } from '../constants/action-types';

const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT,
  recipe,
  name,
  quantity
});

const setIngredients = (ingredients) => ({
    type: SET_INGREDIENTS,
    ingredients
});

export { addIngredient, setIngredients };
