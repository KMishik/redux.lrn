import { ADD_INGREDIENT } from '../constants/action-types';

const ingredientsReducer = (ingredients=[], action) => {

  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      };
      return  ingredients.concat(newIngredient);
  }

  return ingredients;
};

export default ingredientsReducer;

