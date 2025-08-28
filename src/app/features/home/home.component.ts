import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductService } from '../../core/services/product.service';
import { Category, Product } from '../../core/models/api.interface';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-home"></i>', 'next'],
    margin : 10 ,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 8,
      },
    },

    autoplay: true,
    autoplaySpeed: 500,

    nav: true,
  };

  isLoading = false;

  products: Product[] = [];
  categories: Category[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.isLoading = true;

    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);

    this.productService.getAllProducts({}).subscribe({
      next: (response) => {
        this.isLoading = false;
        console.log(response.data);
        this.products = response.data;
      },

      error: (error) => {
        this.isLoading = false;
        // !!!
        console.log(error);
      },
    });
  }
  getAllCategories() {
  
    this.categoryService.getAllCategories({}).subscribe({
      next: (response) => {
        console.log(response.data);
        this.categories = response.data;
      },

      error: (error) => {
        // !!!
        console.log(error);
      },
    });
  }
}
