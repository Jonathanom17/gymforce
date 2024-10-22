import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'home',
        title: 'Inicio',
        loadComponent: () => import('./gymforce/pages/page-home/page-home.component'),
    },
    {
        path: 'servicios',
        title: 'Servicios',

        loadComponent: () => import('./gymforce/pages/pageservices/pageservices.component'),
    },
    {
        path: 'planes',
        title: 'Planes',

        loadComponent: () => import('./gymforce/pages/page-planes/page-planes.component'),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    },

];
