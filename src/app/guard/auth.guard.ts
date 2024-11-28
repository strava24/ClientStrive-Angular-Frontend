import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const user = localStorage.getItem('User');
  const router = inject(Router)

  if (user != null) {
    return true;
  } else {
    router.navigateByUrl('/login')
    return false;
  }



};
