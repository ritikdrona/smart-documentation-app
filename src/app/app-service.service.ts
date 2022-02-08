import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private hppt: HttpClient) { }
  postImages(data: any){
    return this.hppt.post<any>("http://f4c4-171-50-140-115.ngrok.io/api/v1/core/images/", data)
  }
}
