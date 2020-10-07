import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES_CONFIGURATION } from './app.routes';


@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES_CONFIGURATION)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
