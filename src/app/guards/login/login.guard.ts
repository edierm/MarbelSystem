import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if(JSON.parse(localStorage.getItem('userLogin'))) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}