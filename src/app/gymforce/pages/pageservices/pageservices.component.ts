import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { SectionIcomComponent } from "../../components/section-icom/section-icom.component";

@Component({
  selector: 'app-pageservices',
  standalone: true,
  imports: [BannerComponent, SectionIcomComponent],
  templateUrl: './pageservices.component.html',
  styleUrl: './pageservices.component.css'
})
export default class PageservicesComponent {

}
