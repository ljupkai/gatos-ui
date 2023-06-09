import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, catchError, map, of, tap } from "rxjs";
import { TokenResponse } from "../auth/interfaces/token-response";
import { RegisterResponse } from "../auth/interfaces/registro-response";
import { User, UserLogin } from "../auth/interfaces/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  logged = false;
  loginChange$ = new ReplaySubject<boolean>(1);
  usuarioActualRoles!: string[];

  constructor(private readonly http: HttpClient) {}

  login(loginData: UserLogin): Observable<any> {
    return this.http
      .post<TokenResponse>("http://localhost:3000/auth/login", loginData)
      .pipe(
        map((resp) => {
          localStorage.setItem("token", resp.access_token);
          this.usuarioActualRoles = resp.roles;
          console.log(this.usuarioActualRoles)
        }),
        tap(() => {
          this.logged = true;
          this.loginChange$.next(true);
        })
      );
  }

  register(userInfo: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      "http://localhost:3000/auth/registro",
      userInfo
    );
  }

  checkToken(): Observable<TokenResponse> {
    return this.http.get<TokenResponse>("http://localhost:3000/auth/validate");
  }

  logout(): void {
    localStorage.removeItem("token");
    this.setLogged(false);
  }

  isLogged(): Observable<boolean> {
    if (this.logged) {
      return of(true);
    }
    return this.http
      .get<TokenResponse>("http://localhost:3000/auth/validate")
      .pipe(
        map(() => {
          this.setLogged(true);
          return true;
        }),
        catchError((error) => of(false))
      );
  }

  private setLogged(logged: boolean) {
    this.logged = logged;
    this.loginChange$.next(logged);
  }

  hasAccess(): boolean {
    return this.usuarioActualRoles.includes('admin');
  }


  //   if (this.logged) {
  //     return of(true);
  //   }
  //   return this.http.get<TokenResponse>('http://localhost:3000/auth/validate').pipe(
  //     map(() => {
  //       this.setLogged(true);
  //       return true;
  //     }),
  //     catchError((error) => of(false))
  //   );
  // }),
  // catchError((e) => of(false))

  // isLogged(): Observable<boolean> {
  //   if (!this.logged && !localStorage?.['token']) {
  //     return of(false);
  //   } else if (this.logged && localStorage?.['token']) {
  //     return of(true);
  //   } else {
  //     this.http.get<TokenResponse>('http://localhost:3000/auth/validate').subscribe({
  //       next: () => {
  //         this.logged = true;
  //         this.loginChange$.next(true);
  //         tap(() => of(true));
  //       },
  //       error: () => {
  //         this.logout();
  //         tap(() => of(false));
  //       },
  //     });
  //   }

  //   return of(false);
  // }
}
