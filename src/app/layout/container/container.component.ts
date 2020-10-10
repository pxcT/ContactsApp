import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Configurations & enums
import { STANDARD_MENU_CONFIG } from '@app-layout/sidebar-menu/configs/standard-menu.config';

// Service
import { AuthService } from '@app-auth/services/auth.service';
import { AUTH_ROUTES, MAIN_APP_ROUTES } from 'app/routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
    public opened = true;
    public isLoggedIn = false;

    // stw-sidebar-menu @Inputs()
    public menuConfiguration = STANDARD_MENU_CONFIG;

    private destroy$ = new Subject<boolean>();

    constructor(private authService: AuthService, private router: Router) {  
        this.isLoggedIn = !!window.localStorage.getItem('userId');
    }

    ngOnInit() {  
        this.authService.loginState.pipe(takeUntil(this.destroy$)).subscribe((loginState: boolean) => {
            this.isLoggedIn = loginState;

            const navRoute = this.isLoggedIn ? MAIN_APP_ROUTES.CONTACTS : AUTH_ROUTES.LOGIN;
            this.router.navigate([navRoute])
        })
    }


    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
