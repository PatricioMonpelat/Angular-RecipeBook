import { Component, Injectable, OnInit } from '@angular/core';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

@Injectable({providedIn: 'root'})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
