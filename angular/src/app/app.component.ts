import { Component } from '@angular/core';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  User = {
    name: "Hiếu Cún",
    age: 20,
    address: "Bắc Giang"
  }
}
