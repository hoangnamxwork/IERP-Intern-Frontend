import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = "https://localhost:7060/api/Manager/"
  constructor(private http : HttpClient, private route:Router) { }

  GetAllUsers(){
    return this.http.get<any>(`${this.baseURL}GetAllUsers`);
  }
}
