import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is the intructions for the recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A Test Recipe', 'This is the intructions for the recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
