import { Routes } from '@angular/router';

export const routes: Routes = [


    {path : "" , redirectTo : "home" , pathMatch : "full"},
    {path: "home" , loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)},
    {path: "products" , loadComponent: () => import('./features/product/product.component').then(m => m.ProductComponent)},
    {path: "cart" , loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent)},
    {path: "categories" , loadComponent: () => import('./features/categories/categories.component').then(m => m.CategoriesComponent)},
    {path: "brands" , loadComponent: () => import('./features/brands/brands.component').then(m => m.BrandsComponent)},
    {path: "login" , loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)},
    {path: "register" , loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent)},
    // product-details/456467867564 ==>>> id
    {path: "product-details/:id" , loadComponent: () => import('./features/product-details/product-details.component').then(m => m.ProductDetailsComponent)},



    // !!!
    {path :"**" , loadComponent : () => import('./features/notfound/notfound.component').then(m => m.NotfoundComponent)}
];
