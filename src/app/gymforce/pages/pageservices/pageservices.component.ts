import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { SectionIcomComponent } from "../../components/section-icom/section-icom.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { SliderIMG } from '../../interfaces/menu';

@Component({
  selector: 'app-pageservices',
  standalone: true,
  imports: [BannerComponent, SectionIcomComponent, SliderComponent],
  templateUrl: './pageservices.component.html',
  styleUrl: './pageservices.component.css'
})
export default class PageservicesComponent {
  slidesIMG: SliderIMG[] =  [
    {
      url: 'img/img-slider/slider1.jpg',
      title: 'Coach',
      description: 'This is the first slide',
    },
    {
      url: '/img/img-slider/slider2.jpg',
      title: 'Rutinas Personalizadas',
      description: 'This is the second slide',
    },
    {
      url: '/img/img-slider/slider3.jpg',
      title: 'Control de Masa Moscular',
      description: 'This is the third slide',
    },
    {
      url: '/img/img-slider/slider4.jpg',
      title: 'Clase Funcional',
      description: 'This is the fourth slide',
    },
    {
      url: '/img/img-slider/slider5.jpg',
      title: 'Equipo de Ültima Generación',
      description: 'This is the fifth slide',
    },
  ];

}
