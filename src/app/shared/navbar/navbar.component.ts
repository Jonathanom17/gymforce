import { MenuItem } from './../../gymforce/interfaces/menu';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   rutasMenu: MenuItem[]=[
    {componente:'/home',title:'Inicio'},
    {componente:'servicios',title:'Servicios'},
    {componente:'planes',title:'Planes'}
   ];
   

}
