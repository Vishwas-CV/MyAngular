import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

sayHello(inputElement: HTMLInputElement){
  alert('Hello '+inputElement.value);
}

}
