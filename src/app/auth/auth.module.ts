import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// User-defined modules
import { AuthRoutingModule } from '@app-auth/auth-routing.module';
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        SharedModule,
        CommonModule,
    ],
    exports: [],
    declarations: AuthRoutingModule.components,
    providers: [],
})
export class AuthModule { }
