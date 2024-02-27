import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

searchText: string = '';

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText);
}

}
