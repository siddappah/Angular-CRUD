import { Injectable, Input, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private dataSource = new BehaviorSubject<any>("");

  constructor(private http: HttpClient) {}
  // loginData: any;
  baseUrl: string = environment.URL;

  // public baseUrl = "http://localhost:3000/employee/add-employee";
  // public baseUrl1 = "http://localhost:3000/employee/get-employees";

  createEmployee(employee: any) {
    console.log(employee);
    return this.http.post(this.baseUrl + "/add-employee", employee);
  }
  updateEmployee(employee: any, id: string) {
    console.log(employee);
    return this.http.put(this.baseUrl + `/update-employee/${id}`, employee);
  }

  getEmployees() {
    return this.http.get(this.baseUrl + "/get-employees");
  }

  getEmployeeDetails(id: number) {
    // return this.http.get(this.baseUrl + `/view-employee/${id}`);
    const emoloyeeId = { id };
    return this.http.post(this.baseUrl + `/view-employee`, emoloyeeId);
  }

  deleteAnEmployee(id: string) {
    return this.http.delete(this.baseUrl + `/delete-employee/${id}`);
  }
  registerEmp(reg: any) {
    return this.http.post(this.baseUrl + "/register", reg);
  }
  loginEmp(login: any) {
    return this.http.post(this.baseUrl + "/login", login);
  }

  // storeLoginInformation(loginInfo: any) {
  //   this.loginData = loginInfo;
  // }

  // getLoginInformation() {
  //   return this.loginData;
  // }

  updateLoginData(data: any) {
    this.dataSource.next(data);
    console.log("---LOGIN-----", data);
  }

  getLoginData() {
    return this.dataSource.asObservable();
  }
}
