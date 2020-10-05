import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginScreenComponent } from '@app-auth/features/login-screen/login-screen.component';

// Constants & Eums
import { AUTH_ROUTES_CONFIGURATION } from '@app-auth/auth.routes';

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES_CONFIGURATION)],
    exports: [RouterModule],
    declarations: [],
})
export class AuthRoutingModule { 
    static components = [LoginScreenComponent]
}
