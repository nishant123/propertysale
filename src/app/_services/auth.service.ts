import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { endpoints } from '../_config/url-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  public userData = new BehaviorSubject<any>({});
 // private token: string;
  public readNotificationId = new Subject<any>();

  constructor(private http: HttpClient) { }

  register(body:any): Observable<any> {
    return this.http.post(endpoints.auth.registerUrl, body);
  }
  login(body:any): Observable<any> {
    return this.http.post(endpoints.auth.loginUrl, body);
  }
  
}
