import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
        
   
  private apiUrl = "http://localhost:8080/razorpay/createOrder";


  constructor(private httpclient : HttpClient) { }

  create(data : Post): Observable<any>{
    return this.httpclient.post(this.apiUrl,data).pipe(catchError((error : HttpErrorResponse)=>{
      return throwError(()=>error);
    }));
  }
}
