import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ListEmployeesComponent } from "./list-employees/list-employees.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { AddressComponent } from "./address/address.component";
import { ParentComponent } from "./parent/parent.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: 'list', component: ListEmployeesComponent },
  { path: "", component: ListEmployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "view/:id", component: EmployeeDetailsComponent },
  { path: "edit/:id", component: CreateEmployeeComponent },
  { path: "address", component: AddressComponent },
  { path: "parent", component: ParentComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
