import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface ImageResponse {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: "root"
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public get() {
    return this.http
      .get<ImageResponse>("https://api.unsplash.com/photos/random", {
        headers: {
          Authorization: "Client-ID xOhCa3tkTx5mBU_FLDAjfrtCnh79cMi6Ro1j2MoZ24w"
        }
      })
      .pipe(pluck("urls", "small"));
  }
}
