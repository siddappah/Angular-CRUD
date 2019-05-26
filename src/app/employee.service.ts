import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

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
    return this.http.get(this.baseUrl + `/view-employee/${id}`);
  }

  deleteAnEmployee(id: string) {
    return this.http.delete(this.baseUrl + `/delete-employee/${id}`);
  }
}
