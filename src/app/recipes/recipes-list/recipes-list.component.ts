import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store
      .select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // onRecipeSelected (recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
