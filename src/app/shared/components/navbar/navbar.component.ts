import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  localIsLogin = false;
  pages: { title: string; path: string }[] = [
    { path: 'home', title: 'Home' },
    { path: 'products', title: 'Products' },
    { path: 'categories', title: 'Categories' },
    { path: 'brands', title: 'Brands' },
    { path: 'cart', title: 'Cart' },
  ];

  authPages: { title: string; path: string }[] = [
    { path: 'login', title: 'Login' },
    { path: 'register', title: 'Register' },
  ];

  constructor(
    private flowbiteService: FlowbiteService,
    private authService: AuthService
  ) {
    authService.isLogin.subscribe({
      next: (isLogin) => {
        console.log({isLogin} , "nav");

        this.localIsLogin = isLogin;
      },
    });
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  logOut() {
    this.authService.logOut();
  }
}
