import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/api.interface';
import { ProductCardComponent } from "../../shared/components/product-card/product-card.component";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ActivatedRoute, Router } from '@angular/router';




// !!!!!!!! 56 / 2 ==> 28
@Component({
  selector: 'app-product',
  imports: [ProductCardComponent , NgxPaginationModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  limit = 10;
  currentPage = 1;
    totalItems = 0;

  isLoading = false;
  products : Product[] = [];
  constructor( private productService  :ProductService , private router : Router , private activatedRoute: ActivatedRoute ){
    // Observable  ==> 
    activatedRoute.queryParams.subscribe((params)=>{
    this.getAllProducts(params['page'] || 1, this.limit)
    })
   
  }

  ngOnInit(): void {
    this.getAllProducts(1, this.limit);
  }





  getAllProducts(page : number , limit : number){


    this.isLoading = true ;
    this.productService.getAllProducts({page , limit}).subscribe({
      next : (res)=>{
       this.products =  res.data;


       this.totalItems = res.results;
       this.currentPage =  res.metadata.currentPage;
       this.limit = res.metadata.limit;



      },
      
    }).add(()=>{
      this.isLoading = false;
    })



  }
  


  handlePageChange(pageNumber : number){
    // this.getAllProducts( pageNumber, this.limit);


    this.router.navigate([],
        {
      queryParams: { page: pageNumber },
      // !!!!!!!!!
      queryParamsHandling : "merge",
    }
     );

  }


}
