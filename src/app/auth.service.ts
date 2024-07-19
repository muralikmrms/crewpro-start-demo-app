import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    // API call to fetch the token
    return this.http
      .post<{ token: string }>('/security/getToken', { username, password })
      .pipe(
        map((response) => {
          this.token = response.token;
          return true;
        })
      );
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }
}
