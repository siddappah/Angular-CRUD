import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from "../employee.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Employee } from "../models/employee.models";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  formName: string;
  isEnable: boolean;
  isCreateEdit: string;
  // public employeeDetails: Employee = new Employee();
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.isCreateEdit = params.id;
        this.formName = "Edit";
        // console.log("Edit id", params.id);
        this.employeeService.getEmployeeDetails(params.id).subscribe(
          (data: any) => {
            // console.log(data);
            this.isEnable = false;
            this.employeeForm.patchValue({
              id: data.id,
              name: data.name,
              email: data.email,
              gender: data.gender,
              dob: data.dob,
              department: data.department
            });
          },
          err => {
            console.log(err);
          }
        );
      } else {
        this.formName = "Create";
        this.isEnable = true;
        this.isCreateEdit = "";
      }
    });

    this.employeeForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      gender: ["Male"],
      dob: [""],
      department: [""]
    });
  }
  onSubmit() {
    if (this.employeeForm.invalid) {
      return false;
    }
    // console.log(this.employeeForm.value);
    if (this.isCreateEdit) {
      // Update an employee
      this.employeeService.updateEmployee(this.employeeForm.value, this.isCreateEdit).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate([""]);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      // Create an employee
      this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate([""]);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
