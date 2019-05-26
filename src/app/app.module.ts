import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule
} from "@angular/material";

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

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    NavigationComponent,
    WarningAlertComponent
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
    ModalModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [WarningAlertComponent]
})
export class AppModule {}
