import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => 
{

  const aut=inject(AuthService)
  const router=inject(Router)


  return aut.isAuth()? true:router.createUrlTree(['/login']);
};

export const guestGuard: CanActivateFn =()=>
  {
    const authGuard=inject(AuthService)
    const router=inject(Router)
    return authGuard.isAuth() ? router.createUrlTree(['/home']) : true;
  }