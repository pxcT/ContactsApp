import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';

@Injectable({providedIn: 'root'})
export class NoAuthGuard implements CanLoad {
    constructor(private router: Router) { }

    canLoad(route: Route) {
        const id = window.localStorage.getItem('userId');
        if (id) {
            this.router.navigate(['/home'])
        }
        return !id ? true : false;
    }
}