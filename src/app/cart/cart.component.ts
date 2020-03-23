import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { CartService} from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
   }
   onSubmit(customerData){ 
     this.items = this.cartService.clearCart();
     this.checkoutForm.reset()

     console.warn('your order has been submited', customerData)
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}