import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.services';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    private userSub: Subscription;
    isAuthenticated = false;

    constructor(private authService: AuthService, private recipeService: RecipeService, private store: Store<fromApp.AppState>) {

    }
    ngOnInit() {
        this.userSub = this.store
            .select('auth')
            .pipe(map(authState => authState.user))
            .subscribe(user => {
                this.isAuthenticated = !!user;
                // console.log(!user);
                // console.log(!!user);
            });
    }

    onSaveData() {
        this.store.dispatch(new RecipeActions.StoreRecipes());
        console.log('button save');
    }

    onFetchData() {
        // this.dataStorageService.fetchRecipes();
        // console.log('button fetch');
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    onLogout() {
        this.store.dispatch(new AuthActions.Logout());
    }

}
