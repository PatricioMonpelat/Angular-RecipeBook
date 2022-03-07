import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
        RecipesStartComponent,
        RecipesEditComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ]
})

export class RecipesModule {

}
