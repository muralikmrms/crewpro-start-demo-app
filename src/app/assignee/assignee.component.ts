import { Component, OnInit } from '@angular/core';
import { AssigneeService } from '../assignee.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrl: './assignee.component.css',
})
export class AssigneeComponent implements OnInit {
  assignees: any[] = [];
  error: string | null = null;

  constructor(private assigneeService: AssigneeService) {}

  ngOnInit(): void {
    this.assigneeService.getAssignees().subscribe(
      (data) => {
        if (data.error) {
          this.error = data.error;
        } else {
          this.assignees = data;
        }
      },
      (error) => {
        this.error = 'Error fetching assignees data';
      }
    );
  }
}
