import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.employeeService.loginEmp(form.value).subscribe(
        (data: any) => {
          if (data.check === "success") {
            console.log(data);
            // this.employeeService.storeLoginInformation(data.message);
            this.employeeService.updateLoginData(data.message);
            this.router.navigate([""]);
          } else {
            this.errorMessage = data.message;
            console.log(data);
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
