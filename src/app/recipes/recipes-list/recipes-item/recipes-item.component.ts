import { Component, Input,  OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();
  // constructor(private recipeService: RecipeService) { }
  @Input() index: number;
  ngOnInit() {
  }
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
