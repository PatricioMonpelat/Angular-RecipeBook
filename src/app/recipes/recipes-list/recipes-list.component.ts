import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  // onRecipeSelected (recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
