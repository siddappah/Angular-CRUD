import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      gender: ["Male"]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return false;
    }
    console.log(this.registerForm.value);
    this.employeeService.registerEmp(this.registerForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
