import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: 'First',
        price: 123
      }
    });
  }

}
