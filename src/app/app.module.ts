import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent,
    EmployeeComponent,
    AssigneeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true },
  ],
  //bootstrap: [AppComponent],
})
export class AppModule {}
