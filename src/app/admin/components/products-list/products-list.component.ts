import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';
import { MatTableDataSource, MatTable } from '@angular/material';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @ViewChild('producTable', {static: false}) table: MatTable<Product>;
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  // dataSource = new MatTableDataSource<Product>(this.products);


  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
       this.products = products;
       this.table.dataSource = this.products;
    });
  }

  deleteProducts(productDelete: Product) {
    this.productsService.deleteProduct(productDelete._id).subscribe(() => {
      this.products = this.products.filter((product: Product) => product._id !== productDelete._id);
      this.table.dataSource = this.products;
      this.table.renderRows();
    });
  }

}
