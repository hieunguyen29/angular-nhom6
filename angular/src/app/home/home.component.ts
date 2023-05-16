import { Component } from '@angular/core';
import { User } from '../interface/user';
import { Product } from '../interface/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User = {
    name: "Hiếu Cún",
    age: 20,
    address: "Bắc Giang"
  };
  products: Product[] = [
    {
      id: '1',
      name: 'Ao khoac',
      price: 200,
      description: 'Mo ta cho san pham',
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
    },
    {
      id: '2',
      name: 'Quan',
      price: 300,
      description: 'Mo ta cho san pham',
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
    },
    {
      id: '3',
      name: 'Vest',
      price: 400,
      description: 'Mo ta cho san pham',
      imgUrl:
        'https://routine.vn/media/catalog/product/cache/5de180fdba0e830d350bd2803a0413e8/e/c/ecom.21.10_232__1.jpg',
    },
  ];
}