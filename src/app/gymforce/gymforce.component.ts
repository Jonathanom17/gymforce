import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { BannerComponent } from "./components/banner/banner.component";

@Component({
  selector: 'app-gymforce',
  standalone: true,
  imports: [RouterModule, NavbarComponent, BannerComponent],
  templateUrl: './gymforce.component.html',
  styleUrl: './gymforce.component.css'
})
export default class GymforceComponent {

}
