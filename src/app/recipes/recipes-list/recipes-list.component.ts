import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onRecipeSelected (recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
