import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = 'Your One Stop Shop For Everything.';
  source: string = "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=740&t=st=1707382207~exp=1707382807~hmac=7cf5d3b3d829ce4b0501537fed6c1c58d21a1c33f3619bac4b76b50465ac6ccd";
  getSlogan(){
    return 'Your One Stop Shop For Everything.'
  }
}
