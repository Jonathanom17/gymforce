import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { SectionIcomComponent } from "../../components/section-icom/section-icom.component";
import { CardEventComponent } from "../../components/card-service/card-service.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [BannerComponent, SectionIcomComponent, CardEventComponent, FooterComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export default class PageHomeComponent {

}
