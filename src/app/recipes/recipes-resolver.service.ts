import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.services';



@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<any> {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.recipeService.getRecipes().length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
    }
}
