import {afterRender, inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient)
  private storage: Storage|undefined

  constructor() {
    afterRender(() => {
      this.storage = window.localStorage;
    })
  }

  logout(): void {
    if(this.storage){
      this.storage.setItem('isLoggedIn', 'false');
      this.storage.removeItem('token');
    }
  }


}
