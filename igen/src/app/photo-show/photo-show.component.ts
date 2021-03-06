import { Component, OnInit, Input } from "@angular/core";
import { ImageService } from "../image.service";

@Component({
  selector: "app-photo-show",
  templateUrl: "./photo-show.component.html",
  styleUrls: ["./photo-show.component.css"]
})
export class PhotoShowComponent implements OnInit {
  @Input() image = "";

  constructor(private photoService: ImageService) {
    this.getPhoto();
  }

  ngOnInit() {}

  getImage() {
    this.getPhoto();
  }

  getPhoto() {
    this.photoService.get().subscribe(response => {
      this.image = response;
    });
  }
}
