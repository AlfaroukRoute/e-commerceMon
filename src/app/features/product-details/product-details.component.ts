import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/api.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  isLoading = false;
  product : Product | null  = null ;
  constructor(private productService : ProductService,  private activeRoute : ActivatedRoute ){}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params)=>{
      console.log(params['id']);
      this.getProductDetails(params['id']);
      
    })
    
  }

  getProductDetails(productId: string) {
    this.isLoading = true;
    this.productService.getProductDetails(productId).subscribe({
      next: (res) => {
        console.log(res.data);
        this.product = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

}
