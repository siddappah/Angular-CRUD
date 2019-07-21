import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  // birthday = new Date(1987, 0, 18);
  // messageFromParent="This is message from parent";
  constructor() {}
  message: string;
  ngOnInit() {}

  receiveMessage($event) {
    this.message = $event;
  }
}
