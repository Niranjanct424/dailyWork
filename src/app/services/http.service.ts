import { Injectable } from '@angular/core';
import {  HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  // constructor(private _httpClient: HttpClient) {}

  public post(url:any , body:any , head:any){

    return this.http.post(url,body,head);
  }


  public put(url:any , body:any , head:any){

    return this.http.put(url,body,head);
  }

  public get(url :any,options :any):any{
    return this.http.get(url,options);
  }


  // public get(url: string, options: any): Observable<any> {
  //   return this.http.get(url, options);
  // }

 

  public postMethod(url: string, body: any, options: any): Observable<any> {
    return this.http.post(url, body, options);
  }

  public getMethod(url: string, options: any): Observable<any> {
    return this.http.get(url, options);
  }

  public putMethod(url: string, body: any, options: any): Observable<any> {
    return this.http.put(url, body, options);
  }

  public deleteMethod(url: string, options: any): Observable<any> {
    return this.http.delete(url, options);
  }

  public patchMethod(url: string, body: any, options: any): Observable<any> {
    return this.http.patch(url, body, options);
  }

  // fetching token from local storage stored during login
  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };

  // public post(url: string, body: any, options: any): Observable<any> {
  //   return this.http.post(url, body, options);
  // }
  // public patchMethod(url: string, body: any, options: any): Observable<any> {
  //   return this.http.patch(url, body, options);
  // }


}
