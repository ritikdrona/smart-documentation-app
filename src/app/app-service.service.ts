import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  postImages(data: any){
    return this.http.post<any>("http://9456-223-177-89-20.ngrok.io/api/v1/core/images/", data)
  }
  saveImages(data: any){
    return this.http.post<any>("http://9456-223-177-89-20.ngrok.io/api/v1/core/documents/", data)
  }
}
