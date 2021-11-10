import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthReponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
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
        );
    }
}
