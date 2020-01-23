import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicket: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    // Detecta los cambios desde el motor de angular 
    // ngOnChanges(changes: SimpleChanges) { // se implementa como interface
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() { // se implementa como interface
        console.log('3. ngOnInit');
    }

    // Detecta cambios pero este metodo es personalizable entra en conflicto con ngOnChanges
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('agregar producto');
        this.cartService.addCart(this.product);
        // this.productClicket.emit(this.product.id);
    }
}