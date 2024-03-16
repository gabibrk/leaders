import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private httpClient: HttpClient) { }

  searchUsers(value: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/users/list/?q=${value}&limit=20&type=lookalike&platform=instagram`)
      .pipe(map((response: any) => response.data))
  }

  getUserFeeds(value: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/users/feeds/?url=${value}`)
    
  }
}

