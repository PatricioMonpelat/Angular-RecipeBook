import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { runInThisContext } from 'vm';

export interface AuthReponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }
    signup(email: string, password: string) {
        return this.http.post<AuthReponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWGBnCxgEdSaon3sHB_oa0zG-2fqsjgnc',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(
                catchError(errorRes => {
                    let errorMessage = 'An unknown error occured!';
                    if (!errorRes.error || !errorRes.error.error) {
                        return throwError(errorMessage);
                    }
                    switch (errorRes.error.error.message) {
                        case 'EMAIL_EXISTS':
                            errorMessage = 'This email exists already!';

                    }
                    return throwError(errorMessage);
                })
            );
    }

    login(email: string, password: string) {
        return this.http.post<AuthReponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWGBnCxgEdSaon3sHB_oa0zG-2fqsjgnc',
            {
                email: email,
                password: password,
                returnSecureToken: true,

            }
        );
    }
}
