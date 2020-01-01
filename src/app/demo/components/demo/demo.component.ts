import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  title = 'platzi-store';

  items = ['tonton', 'sultan', 'rabito', 'robert', 'tatin', 'pelusa'];

  power = 10;
  
  constructor() { }

  ngOnInit() {
  }


  addItem() {
    this.items.push('otro perro');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
