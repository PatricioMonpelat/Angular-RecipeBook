import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe: Recipe;
// @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
