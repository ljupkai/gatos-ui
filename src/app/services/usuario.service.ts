import { Injectable } from '@angular/core';
import { ResponseUser, User } from '../auth/interfaces/user';
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
}
