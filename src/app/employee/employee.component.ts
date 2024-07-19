import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  error: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        if (data.error) {
          this.error = data.error;
        } else {
          this.employees = data;
        }
      },
      (error) => {
        this.error = 'Error fetching employees data';
      }
    );
  }
}
