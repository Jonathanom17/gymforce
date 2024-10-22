import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: "landing",
        title:"Inicio",
        loadComponent: () => import('./gymforce/gymforce.component'),
        children:[
            {
                path:'home',
                title:'Inicio',
                
                loadComponent: () => import('./gymforce/pages/page-home/page-home.component'),
            },
            {
                path:'servicios',
                title:'Servicios',
                
                loadComponent: () => import('./gymforce/pages/pageservices/pageservices.component'),
            },
            {
                path:'planes',
                title:'Planes',
                
                loadComponent: () => import('./gymforce/pages/page-planes/page-planes.component'),
            }
        ]

    },
    {
        path: '',
        redirectTo: '/landing',
        pathMatch:'full'

    },

];
