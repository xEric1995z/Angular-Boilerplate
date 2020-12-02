import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "http://localhost:3000";

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/api/posts`);
  }

 
  addPosts(data: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    return this.http.post<any>(`${this.baseURL}/api/posts`, body,{'headers':headers})
  } 

}
