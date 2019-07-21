import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { Employee } from "../models/employee.models";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeDetails: Employee = new Employee();
  isLoading: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.activatedRoute.params.subscribe(params => {
      // console.log("View id", params.id);
      if (params.id) {
        this.employeeService.getEmployeeDetails(params.id).subscribe(
          (data: any) => {
            console.log(data);
            this.employeeDetails = data;
            this.isLoading = false;
          },
          err => {
            console.log(err);
            this.isLoading = false;
          }
        );
      }
    });
  }
}
