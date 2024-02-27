import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  enteredSearchValue: string = "";

  changesearchvalue(eventData: Event){
    //console.log((<HTMLInputElement>eventData.target).value);
    this.enteredSearchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Output()
  searchtextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchtextChanged.emit(this.enteredSearchValue);
    console.log(this.enteredSearchValue);
  }
}
