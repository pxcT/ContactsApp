import { AuthGuard } from '@app-auth/guards/auth.guard';
import { NoAuthGuard } from '@app-auth/guards/no-auth.guard';

export enum MAIN_APP_ROUTES {
    DEFAULT_ROUTE = 'contacts',
    HOME = 'home'
}

export enum AUTH_ROUTES {
    LOGIN = 'login'
}

export enum EXTRA_ROUTES { 
    NOT_FOUND = 'not-found'
}

export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    redirectTo: MAIN_APP_ROUTES.DEFAULT_ROUTE,
    pathMatch: 'full'
}, {
    path: MAIN_APP_ROUTES.DEFAULT_ROUTE,
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
    // canLoad: [AuthGuard]    
}, {
    path: AUTH_ROUTES.LOGIN, 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    // canLoad: [NoAuthGuard],
}, {
    path: '**', redirectTo: EXTRA_ROUTES.NOT_FOUND
}];