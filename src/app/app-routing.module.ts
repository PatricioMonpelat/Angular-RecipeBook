import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '' , redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes' , component: RecipesComponent, children: [
        { path: '', component: RecipesStartComponent },
        { path: 'new', component: RecipesEditComponent },
        { path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipesEditComponent, resolve: [RecipesResolverService]}
    ] },
    { path: 'shopping-list' , component: ShoppingListComponent },
    { path: 'auth' , component: AuthComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}
