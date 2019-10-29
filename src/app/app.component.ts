import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['tonton', 'sultan', 'rabito', 'robert', 'tatin', 'pelusa'];

  products: Product[] = [
    { id: '1', image: 'assets/images/camiseta.png', title: 'Camiseta', price: 500, description: 'very good' },
    { id: '2', image: 'assets/images/hoodie.png', title: 'Hoodie', price: 600, description: 'very good' },
    { id: '3', image: 'assets/images/mug.png', title: 'Mug', price: 300, description: 'very good' },
    { id: '4', image: 'assets/images/pin.png', title: 'Pin', price: 400, description: 'very good' },
    { id: '5', image: 'assets/images/stickers1.png', title: 'Stickers1', price: 100, description: 'very good' },
    { id: '6', image: 'assets/images/stickers2.png', title: 'Stickers2',  price: 200, description: 'very good' }
  ];

  addItem() {
    this.items.push('otro perro');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id) {
    console.log(id);
  }

}
