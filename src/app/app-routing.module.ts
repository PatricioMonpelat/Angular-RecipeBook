import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '' , redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes' , component: RecipesComponent, children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipesEditComponent },
        { path: ':id', component: RecipesDetailComponent },
        { path: ':id/edit', component: RecipesEditComponent }
    ] },
    { path: 'shopping-list' , component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}
