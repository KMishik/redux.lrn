import store from './store/store';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

window.addRecipe = addRecipe;
window.addIngredient = addIngredient;
window.store = store;
