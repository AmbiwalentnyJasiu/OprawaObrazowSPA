import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {afterRender, inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly router = inject(Router)
  private storage: Storage|undefined

  constructor() {
    afterRender(() => {
      this.storage = window.localStorage;
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.isLoggedIn()){
      return true;
    }

    this.router.navigateByUrl('login');
    return false;
  }

  isLoggedIn(): boolean {
    if(!this.storage){
      return false;
    }
    return this.storage.getItem('isLoggedIn') === 'true';
  }
}
