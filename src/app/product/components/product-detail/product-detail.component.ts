import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProducts(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '7',
      title: 'nuevo',
      image: 'assets/images/camiseta.png',
      price: 50,
      description: 'nuevo producto'
    };
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5000,
      description: 'update producto'
    };
    this.productService.updateProduct('5e1b935e0a2c4bdb936ec7c7', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product._id).subscribe(product => {
      console.log(product);
    });
  }
}
