import {
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
  REQUEST,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthService } from './core/services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('eCommerce');
  private authService = inject(AuthService);
  private platformId = inject(PLATFORM_ID);
  private request = inject(REQUEST);
  private cookies = inject(CookieService);


  constructor(){
    // window.localStorage
    // console.log(window);
    //local storage ==> cookies
    
  }
  // !!! server|| browser
  ngOnInit(): void {
   

    let token ;
    if (isPlatformBrowser(this.platformId)) {
      token = this.cookies.get('token');
     }else {
       token =this.authService.getCookieValue(this.request?.headers.get('cookie') || '' , "token");
      
     }


     if(token)
     this.authService.decodeToken(token);

    
    



  }
}
