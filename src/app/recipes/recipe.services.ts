import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        // tslint:disable-next-line: max-line-length
        new Recipe(
            'Big Tasty',
             'This is the intructions for the Big Tasty recipe',
              'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQXPkDxA/200/200/original?country=ar',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 2),
                new Ingredient('Letuce', 1),
                new Ingredient('Big Tasty Salse', 1),
                new Ingredient('French Fries', 1)
            ]),
        new Recipe(
            'Grand Doble McBacon',
             'This is the intructions for the Doble Cuarto de Libra recipe',
              'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQXnpmyG/200/200/original?country=ar',
              [
                new Ingredient('Meat', 2),
                new Ingredient('Bread', 2),
                new Ingredient('Cheddar', 2),
                new Ingredient('Ketchup', 1),
                new Ingredient('Mostard', 1),
                new Ingredient('Onion', 1),
                new Ingredient('French Fries', 1)
              ]),
        new Recipe('Grand Triple McBacon',
         'This is the intructions for the Big Mc recipe',
          'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar',
          [
            new Ingredient('Meat', 2),
            new Ingredient('Bread', 3),
            new Ingredient('Cheddar', 2),
            new Ingredient('Big Mc Special Salse', 1),
            new Ingredient('Onion', 1),
            new Ingredient('Letuce', 1),
            new Ingredient('Pepino', 1),
            new Ingredient('French Fries', 1)
          ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}
