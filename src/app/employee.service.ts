import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getEmployees(): Observable<any> {
    const token = this.authService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // Mock API call to get employees data
      return this.http.get<any>('/crewpro/base/employees', { headers });
    } else {
      return of({ error: 'Invalid user' });
    }
  }
}
