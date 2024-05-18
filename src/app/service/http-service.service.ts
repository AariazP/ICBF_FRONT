import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Beneficiario } from '../dto/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
  
  apiUrl = '/api/login.json';

  constructor(private http:HttpClient) { }



  login(email: String, password: String): Observable<boolean> {
    
    return this.http.post<boolean>(`${this.apiUrl}/login`, {email: email, password: password});
  }


  saveBeneficiario(beneficiario: Beneficiario) {
    return this.http.post(`${this.apiUrl}/beneficiario`, beneficiario);
  }
}
