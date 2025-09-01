import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
// !!! boolean true , false 
export const authGuard: CanActivateFn = (route, state) => {
  // !! 

  // !!! false ==>
  const authService = inject(AuthService);
  const router = inject(Router);
  const isLogin = authService.isLogin.getValue();
  console.log({isLogin} , "authGuard");


  if(isLogin){
    return true
  }else {
    return router.navigate(['/login'])
  }
};
