import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/api.interface';
import { RouterLink } from "@angular/router";
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { TestPipe } from '../../pipes/test-pipe';
import { FilterListPipe } from '../../pipes/filter-list-pipe';
import { CartService } from '../../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink , UpperCasePipe , LowerCasePipe , DatePipe , TestPipe ] ,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  today = new Date();
  @Input()
  product  : Product = {} as Product; 

   constructor(

      private cartService : CartService ,
      private toaster : ToastrService
    ) {}
  
  addProductToCart(productId : string) {
    this.cartService.addProductToCart(productId).subscribe({
      error : (error) => {
        console.log(error);
        this.toaster.error(error.message)
      },
      next:(response)=>{
        console.log(response);
        // !!!! ???
        this.toaster.success(response.message)
      }
    })
  }


  // formateDate(date : Date , type : "time" | "date") {
  // const month =  date.getMonth();
  // const day = date.getDay();
  // const year = date.getFullYear();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();
  // const hours = date.getHours();


  // if(type == "time") {
  //   return `${hours}:${minutes}:${seconds}`;
  // }else if(type == "date") {
  //   return `${day}/${month}/${year}`;
  // }

  // return `${day}/${month}/${year}`;
  // }


}
