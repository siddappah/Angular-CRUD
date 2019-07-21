import { Component, OnInit, OnDestroy } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit, OnDestroy {
  public userData: Subscription;
  public loginData: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.userData = this.employeeService
      .getLoginData()
      .subscribe((loginInfo: any) => {
        this.loginData = loginInfo;
      });
  }

  ngOnDestroy() {
    //Close the Observable stream
    this.userData.unsubscribe();
  }
}
