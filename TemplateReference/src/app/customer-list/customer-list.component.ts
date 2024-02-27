import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
 selectedCustomer: Customer | null = null;

  customers: Customer[] = [
    {customerNo: 1, name: 'vishwas', address: "cpt", city: "cpt", country: "India"},
    {customerNo: 2, name: 'Amri', address: "cpt", city: "cpt", country: "India"}
  ]
}
