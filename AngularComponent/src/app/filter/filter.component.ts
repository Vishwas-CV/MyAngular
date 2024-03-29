import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  selectedRadioButtonValue: string = 'All';

@Output()
filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  console.log(this.selectedRadioButtonValue);
}
}
