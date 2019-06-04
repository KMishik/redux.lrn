import store from './store/store';
import { fetchRecipes} from './actions/recipes';
//import { addRecipe } from './actions/recipes';
//import { addIngredient } from './actions/ingredients';
import loadUI from './ui/jquery';

loadUI();

store.dispatch(fetchRecipes());

/*
window.addRecipe = addRecipe;
window.addIngredient = addIngredient;
window.store = store;
*/
