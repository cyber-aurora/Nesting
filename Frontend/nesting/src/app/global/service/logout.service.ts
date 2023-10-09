import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private apiUrl = environment.apiUrl; 

  constructor(private httpClient: HttpClient) {}

  public logout(){
    return localStorage.removeItem('JSESSIONID');
  }  
}
