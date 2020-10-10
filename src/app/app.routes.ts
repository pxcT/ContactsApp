import { AuthGuard } from '@app-auth/guards/auth.guard';
import { NoAuthGuard } from '@app-auth/guards/no-auth.guard';

// Routes
import { AUTH_ROUTES, EXTRA_ROUTES, MAIN_APP_ROUTES } from 'app/routes';


export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    redirectTo: MAIN_APP_ROUTES.HOME,
    pathMatch: 'full'
}, {
    path: MAIN_APP_ROUTES.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
}, {
    path: MAIN_APP_ROUTES.CONTACTS,
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
    canLoad: [AuthGuard]
}, {
    path: AUTH_ROUTES.LOGIN,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [NoAuthGuard],
}, {
    path: '**', redirectTo: EXTRA_ROUTES.NOT_FOUND
}];