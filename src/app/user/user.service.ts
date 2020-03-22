import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = environment.baseUrl;
const appKey = environment.appKey;
const appSecret = environment.appSecret;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = `${baseUrl}/user/${appKey}`;

  get httpBasicOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    };
  }

  constructor(
    private http: HttpClient
  ) { }


  registerUser(input) {
    const data = {
      username: input.username,
      password: input.passwords.password
    };
    return this.http.post(this.userUrl, JSON.stringify(data), this.httpBasicOptions);
  }

  login(input) {
    const data = {
      username: input.username,
      password: input.password
    };
    return this.http.post(`${this.userUrl}/login`, JSON.stringify(data), this.httpBasicOptions);
  }

  setUserAuth(userInfo) {
    sessionStorage.setItem('authtoken', userInfo._kmd.authtoken);
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('userId', userInfo._id);
  }
}
