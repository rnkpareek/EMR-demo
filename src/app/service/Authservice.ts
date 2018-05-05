import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import {Http, Headers} from '@angular/http';
@Injectable()
export class AuthService  {
  constructor(private router: Router,public authHttp: AuthHttp, private _http: Http) {

  }

  jwtHelper: JwtHelper = new JwtHelper();
  useJwtHelper() {
    if (localStorage.getItem('apiToken')) {
      const token = localStorage.getItem('apiToken');
      console.log('token::::' + token);
      if (!this.jwtHelper.isTokenExpired(token)) {
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    }
    return false;
  }
  /*login(email, password) {
    const headers = new Headers();
    var data = [{username:email,password:password}]
    console.log("mail "+JSON.stringify(data))
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/login', JSON.stringify(data) ,{headers : headers, withCredentials: true})
      .map(res => res.json());
  }*/

  userLogout() {
    console.log('Signing Out...');
    return this.authHttp.get('http://localhost:3000/logout');
  }

  canActivate() {
    if (localStorage.getItem('apiToken') !== null) {
      console.log("getting true..")
      return true;
    }
   else{
      console.log("canactive is blocking you sorry")
      this.router.navigate(['']);
      return false;
    }

  }
  /*canActivate() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }*/
}
