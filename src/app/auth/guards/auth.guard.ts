import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
import { AUTH_ROUTES } from 'app/app.routes';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad {
    constructor(private router: Router) { }

    canLoad(route: Route) {
        const id = window.localStorage.getItem('userId');
        if (!id) {
            this.router.navigate([AUTH_ROUTES.LOGIN])
        }
        return id ? true : false;
    }
}