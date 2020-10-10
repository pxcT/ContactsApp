import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app-auth/services/auth.service';

// Extra info
import { AUTH_ROUTES } from 'app/routes';

@Component({
    selector: 'topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    public appLogo = '/assets/img/logo.png'; // In case we want to get the logo from a config

    constructor(private router: Router, private authService: AuthService) { }

    public navigateToParent(): void {

    }

    public logout(): void {
        this.authService.logout();
    }

}
