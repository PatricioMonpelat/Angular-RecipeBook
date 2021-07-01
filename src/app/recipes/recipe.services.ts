import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is the intructions for the recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('A Test Recipe 2', 'This is the intructions for the recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}
