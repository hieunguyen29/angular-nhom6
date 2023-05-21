import { Component } from '@angular/core';
import { User } from '../interface/user';
import { Product } from '../interface/products';
import products from '../datas/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = products;
}
