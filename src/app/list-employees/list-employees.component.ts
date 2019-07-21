import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.models";
import { EmployeeService } from "../employee.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { WarningAlertComponent } from "../warning-alert/warning-alert.component";
import { Subscription } from 'rxjs';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
// ];

@Component({
  selector: "app-list-employees",
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  modalRef: BsModalRef;
  loginProfile: any;
  displayedColumns: string[] = [
    "id",
    "name",
    "email",
    "gender",
    "dob",
    "status"
  ];
  isLoading: boolean;
  userData: Subscription;
  loginData: any;

  constructor(
    private employeeService: EmployeeService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    // this.loginProfile = this.employeeService.getLoginInformation();
    // console.log("---LOGIN-----", this.loginProfile);
    this.userData = this.employeeService
      .getLoginData()
      .subscribe((loginInfo: any) => {
        this.loginData = loginInfo;
      });

    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        // console.log(data);
        this.employees = data;
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }
  ngOnDestroy() {
    //Close the Observable stream
    this.userData.unsubscribe();
  }
  deleteEmployee(id: string) {
    this.modalRef = this.modalService.show(WarningAlertComponent);
    this.modalRef.content.param = id;
  }
}
