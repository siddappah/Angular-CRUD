import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"]
})
export class WarningAlertComponent implements OnInit {
  param: string;
  constructor(
    public bsModalRef: BsModalRef,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {}

  confirm(): void {
    console.log("confirm", this.param);
    this.employeeService.deleteAnEmployee(this.param).subscribe(
      succes => {
        this.bsModalRef.hide();
        console.log(succes);
        this.router.navigate([""]);
      },
      err => {
        console.log(err);
      }
    );
  }

  decline(): void {
    this.bsModalRef.hide();
  }
}
