import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

interface AuthUsernameUnique {
  available: boolean;
}

interface SignUp {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

interface CheckAuthResponse {
  authenticated: true;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  rootUrl = "https://api.angular-email.com";
  signedin$ = new BehaviorSubject(false);

  usernameAvailable(username: string) {
    return this.http.post<AuthUsernameUnique>(`${this.rootUrl}/auth/username`, {
      username
    });
  }

  signup(credentials: SignUp) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<CheckAuthResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
}
