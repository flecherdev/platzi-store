import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        ProductsContainer,
        ProductDetailComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductModule { }
