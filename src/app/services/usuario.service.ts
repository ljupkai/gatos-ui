import { Injectable } from '@angular/core';
import { ResponseUser, User, UserEncuesta } from '../auth/interfaces/user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gato } from '../interfaces/gato';
import { BASE_URL } from '../shared/url.constant';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(`${BASE_URL}usuario/${id}`)
      .pipe(map(res => res));
  }

  actualizarEncuesta(encuesta: UserEncuesta): Observable<UserEncuesta> {
    return this.http.post<UserEncuesta>(`${BASE_URL}usuario/me/encuesta`, {...encuesta})
    .pipe(map(res => res));
  }

  getFavoritos(id: string): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${BASE_URL}usuario/${id}/favoritos`).pipe(map(res => res));
  }

  getEncuesta(idUser: string): Observable<any> {
    return this.http.get<any>(`${BASE_URL}usuario/${idUser}/encuesta`).pipe(map(res => res.resultado));
  }
}
