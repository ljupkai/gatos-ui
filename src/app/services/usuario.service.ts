import { Injectable } from '@angular/core';
import { ResponseUser, User, UserEncuesta } from '../auth/interfaces/user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(`http://localhost:3000/usuario/${id}`)
      .pipe(map(res => res));
  }

  actualizarEncuesta(encuesta: UserEncuesta): Observable<UserEncuesta> {
    return this.http.post<UserEncuesta>(`http://localhost:3000/usuario/me/encuesta`, {...encuesta})
    .pipe(map(res => res));
  }
}
