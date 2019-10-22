import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items = ['tonton', 'sultan', 'rabito', 'robert', 'tatin', 'pelusa'];

  addItem() {
    this.items.push('otro perro');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
