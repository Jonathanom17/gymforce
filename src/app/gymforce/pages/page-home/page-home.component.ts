import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { SectionIcomComponent } from "../../components/section-icom/section-icom.component";
import { CardEventComponent } from "../../components/card-service/card-service.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [BannerComponent, SectionIcomComponent, CardEventComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export default class PageHomeComponent {

}
