import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { IProduct } from 'src/app/common/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  description:string | undefined
  onClick() {
   this.description="mota"
}

  user : User =  {
    name:"Thai",
    age:20,address:"Phu Tho"
     };

  products: IProduct[] =[
     {
  id:1,
    name:"Adidas",
    price:100,
    description:"Adidas",
    imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/20957a7dc9a24e1b85d1ad9a01059c7c_9366/t%E1%BA%A5t-trefoil-cao-%C4%91%E1%BA%BFn-c%E1%BB%95-ch%C3%A2n-3-%C4%91%C3%B4i.jpg"

  },
  {
  id:2,
    name:"Nike",
    price:200,
    description:"Nike",
    imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d26e5909311447eb88bdaf8500e4278a_9366/%C3%A1o-thun-always-original.jpg"

  },
  {
    id:3,
      name:"Puma",
      price:300,
      description:"Hihihihi",
      imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/76dda7b63e7c4a81a273ae790092748b_9366/track-jacket-%C4%91an-d%C3%A2y-always-original.jpg"
  
    },

    {
      id:4,
        name:"Hihihi",
        price:300,
        description:"Hihihihi",
        imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/517b9806e9124a458520af1f010dedaf_9366/gi%C3%A0y-forum-low.jpg"
    
      },
    
  

]
}
