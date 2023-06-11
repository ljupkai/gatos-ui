import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, catchError, map, of, tap } from "rxjs";
import { TokenResponse } from "../auth/interfaces/token-response";
import { RegisterResponse } from "../auth/interfaces/registro-response";
import { User, UserLogin } from "../auth/interfaces/user";
import { BASE_URL } from "../shared/url.constant";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  logged = false;
  loginChange$ = new ReplaySubject<boolean>(1);
  usuarioActualRoles?: string[];

  constructor(private readonly http: HttpClient) {}

  login(loginData: UserLogin): Observable<any> {
    return this.http
      .post<TokenResponse>( `${BASE_URL}auth/login`, loginData)
      .pipe(
        map((resp) => {
          localStorage.setItem("token", resp.access_token);
          this.usuarioActualRoles = resp.roles;
        }),
        tap(() => {
          this.logged = true;
          this.loginChange$.next(true);
        })
      );
  }

  register(userInfo: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${BASE_URL}auth/registro`,
      userInfo
    );
  }

  checkToken(): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${BASE_URL}auth/validate`);
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
      .get<TokenResponse>(`${BASE_URL}auth/validate`)
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

  hasAccess(): string[] {
    return this.usuarioActualRoles || [];
  }


}
