import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProducts(id: string) {
    this.productsService.deleteProduct(id).subscribe(product => {
      console.log(product);
      // const data = this.products.find( (data: Product) => return data._id !== id ? data: {});
      this.fetchProducts();
    });
  }

}
