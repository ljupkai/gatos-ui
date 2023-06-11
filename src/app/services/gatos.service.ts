import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Gato, GatoBase } from '../interfaces/gato';
import { map, Observable } from 'rxjs';
import { GatoResponse } from '../interfaces/responses';
import { User } from '../auth/interfaces/user';
import { BASE_URL } from '../shared/url.constant';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  constructor(private readonly http:HttpClient) {}

  getGatos(): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${BASE_URL}gato`).pipe(map( (res) => res ))
  }

  getGato(id: string): Observable<Gato> {
    return this.http.get<any>(`${BASE_URL}gato/${id}`).
      pipe(map((res) => res.resultado));
  }

  crearGato(gato: GatoBase): Observable<Gato>{
    return this.http.post<Gato>(`${BASE_URL}gato`, gato).pipe(map(res => res))
  }

  actualizarGato(gato: Gato): Observable<Gato>{
    return this.http.post<Gato>(`${BASE_URL}gato`, gato).pipe(map((res) => res))
  }

  marcarLike(idGato: string, idUser: string): Observable<User> {
    const payload = {idGato, idUser}
    return this.http.post(`${BASE_URL}gato/${idGato}/${idUser}/like`, payload).pipe(map((res: any) => res))
  }

  solicitarAdopcion(idGato: string, idUser: string): Observable<Gato> {
    const usuarioId = { usuario: idUser}
    return this.http.post<Gato>(`${BASE_URL}gato/adopcion/${idGato}`, usuarioId).pipe(map((res) => res))
  }

  getAdopcionesPorUsuario(idUser: string): Observable<Gato[]> {
    return this.http.get<any>(`${BASE_URL}gato/${idUser}/adopcion`).pipe(map(res => res.resultado))
  }

  getGatosConUserdata(): Observable<Gato[]> {
    return this.http.get<any>(`${BASE_URL}gato/userdata`).pipe(map( (res) => res.resultado ))
  }

  cambiarStatus(idGato: string, idAdopcion: string, status: string): Observable<Gato> {
    const payload = {idGato, idAdopcion, status}
    return this.http.post<Gato>(`${BASE_URL}gato/${idGato}/adopciones/${idAdopcion}/${status}`, payload).pipe(map((res: any) => res))
  }
}
