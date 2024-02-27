import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ViewChild';


 @ViewChild('dobInput') dateOfBirth!: ElementRef;
 @ViewChild('ageInput') age!: ElementRef;

 calculateAge(){
   let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
   let currentYear = new Date().getFullYear();
   let age = currentYear - birthYear;
   this.age.nativeElement.value = age;
 }
}
