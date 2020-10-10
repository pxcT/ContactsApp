import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// User-defined modules
import { AuthRoutingModule } from '@app-auth/auth-routing.module';
import { SharedModule } from '@app-shared/shared.module';
import { AUTH_ROUTES_CONFIGURATION } from './auth.routes';

// Components
import { LoginScreenComponent } from './features/login-screen/login-screen.component';

@NgModule({
    imports: [
        // AuthRoutingModule,
        SharedModule,
        RouterModule.forChild(AUTH_ROUTES_CONFIGURATION),
        CommonModule,
    ],
    exports: [],
    declarations: [LoginScreenComponent],
    providers: [],
})
export class AuthModule { }
