import { Component } from '@angular/core';
import { Api } from '../services/api.services';
import { Router } from '@angular/router';

@Component({
    selector: 'cart-item',
    templateUrl: './cartItems.component.html',
})

export class CartItemsComponent {
    title = 'Cart Items';
    items;
    errorMessage: string;

    constructor(private api: Api, private router: Router) {}

    getAllItems = () => {
        this.api.getItems()
        .subscribe((data) => console.log('DATA FROM ITEM CALL', data)); 
            
        };
    }

