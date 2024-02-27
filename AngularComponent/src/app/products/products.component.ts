import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {id:1, name: 'Redmi Smart TV', price: '24109', color: 'black', available: 'Available', image: 'https://cdn.moglix.com/p/p5kwdSarOZjkb-xxlarge.jpg'},
    {id:2, name: 'Samsung Washing Machine', price: '12709', color: 'Silver', available: 'Available', image: 'https://lh3.googleusercontent.com/spp/AE_ITi0gQScdbrOiZ4RbY7px0EJHhKS43sXK8UrM7zlpnNFnlC91tEDsHm5VPXoj0mnpJA9haLK_LkhOk4_dLe5lII8YwUB3dhqix9utIyIYv5dR001eBii5BrPF45KDjltw0q3WORx0uV3qP4_eS-cEjt07FV70rMabD0ZKZQfX63_owQtgai21zhEcbFyjzhv56FIHwTt0Yg=s512-rw-pd-pc0x00ffffff'},
    {id:3, name: 'Samsung Refrigerator', price: '14309', color: 'Red', available: 'Available', image: 'https://www.askmea2z.com/inventory_images/6979.jpg'},
    {id:4, name: 'Apple iPhone 15', price: '78999', color: 'black', available: 'Not Available', image: 'https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg'},
    {id:5, name: 'Analog Watch', price: '1309', color: 'black', available: 'Available', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800'},
    {id:6, name: 'DELL Inspiron Ryzen 7', price: '62209', color: 'White', available: 'Available', image: 'https://m.media-amazon.com/images/I/61hk9Tj9VCL._SX679_.jpg'}
  ];

  getTotalProducts(){
    return this.products.length;
  }
  getTotalAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length;
  }
   getTotalNotAvailableProducts(){
    return this.products.filter(product => product.available === 'Not Available').length;
  }

  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    console.log(this.courseCountRadioButton);
  }


  searchText: string = '';

onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText);
}
}
