import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AssigneeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAssignees(): Observable<any> {
    const token = this.authService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // API call to get assignees data
      return this.http.get<any>('/crewpro/base/assignments', { headers });
    } else {
      return of({ error: 'Invalid user' });
    }
  }
}
