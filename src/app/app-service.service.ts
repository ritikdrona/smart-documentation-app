import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  postImages(data: any){
    return this.http.post<any>("http://smart-documentation-api.herokuapp.com/api/v1/core/images/", data)
  }
}
