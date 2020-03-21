import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mods-home",
  templateUrl: "./mods-home.component.html",
  styleUrls: ["./mods-home.component.css"]
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: "Stuff", content: "whoop" },
    { title: "Ayoo", content: "well thenn" },
    { title: "Orange Taste", content: "Orangy" }
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
