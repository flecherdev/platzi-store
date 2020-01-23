import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, TablaComponent, DashboardComponent, ProductsListComponent, FormProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule { }
