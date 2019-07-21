import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./list-employees/list-employees.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeService } from "./employee.service";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutModule } from "@angular/cdk/layout";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { AddressComponent } from "./address/address.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HttpErrorInterceptor } from "./http-error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    NavigationComponent,
    WarningAlertComponent,
    AddressComponent,
    ParentComponent,
    ChildComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    ModalModule.forRoot(),
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  // providers: [EmployeeService],
  // exports:[],
  bootstrap: [AppComponent],
  entryComponents: [WarningAlertComponent]
})
export class AppModule {}
