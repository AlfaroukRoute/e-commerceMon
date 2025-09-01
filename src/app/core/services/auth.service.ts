import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';

type RegisterData = {
  email: string;
  name: string;
  password: string;
  rePassword: string;
  phone: string;
};
type LoginData = {
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {



  //! decoded func (login , register) token isLogin (true)
  //! logOut token login isLogin(false)

  //! token ==>>>> app con


  // !!! isLogin.subscribe({}) nav
  //! auth isLogin.getValue()
  //! useDate = new 
  isLogin = new BehaviorSubject<boolean>(false);







  constructor(private http: HttpClient , private router : Router) {}

  register(data: RegisterData): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }
  login(data: LoginData): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }


  // !!!!! reset password 


   forgetPassword(data : {email  :string}): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      data
    );
  }


   verifyCode(data : {resetCode  :string}): Observable<any> {
    return this.http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      data
    );
  }


    resetPassword(data : {email  :string , newPassword : string}): Observable<any> {
    return this.http.put(
      'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      data
    );
  }



//   !! token 
// ! 1- set token ===> decode (login , register)
//! 2 - home product (app component localstorage)

  decodeToken(token: string) {
    const decoded = jwtDecode(token);
    console.log(decoded);
    if((decoded as any).id) {
        this.isLogin.next(true);
    }
    
  }

  logOut(){
    this.isLogin.next(false);
    localStorage.removeItem('token');

    // !!! navigate login (home , product)
    this.router.navigate(['/login']);
  }
}
