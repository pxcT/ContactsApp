import { IMenuItem } from '@app-layout/sidebar-menu/interfaces/menu-item.interface';
import { MAIN_APP_ROUTES } from '../../../app.routes';

export const STANDARD_MENU_CONFIG: IMenuItem[] = [{
    link: `${MAIN_APP_ROUTES.HOME}`,
    text: 'Home',
    icon: '',
    name: 'Home'
}, {
    link: `${MAIN_APP_ROUTES.CONTACTS}`,
    text: 'Contacts',
    icon: '',
    name: 'Contacts'
}]