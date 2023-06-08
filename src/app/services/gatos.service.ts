import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Gato } from '../interfaces/gato';
import { map, Observable } from 'rxjs';
import { GatoResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class GatosService {
  baseUrl : string = 'http://localhost:3000/'

  constructor(private readonly http:HttpClient) {}

  getGatos(): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.baseUrl}gato`).pipe(map( (res) => res ))
  }

  getGato(id: string): Observable<Gato> {
    return this.http.get<any>(`${this.baseUrl}gato/${id}`).
      pipe(map((res) => res.resultado));
  }

  crearGato(gato: Gato): Observable<Gato>{
    return this.http.post<Gato>(`${this.baseUrl}gato`, gato).pipe(map(res => res))
  }

  actualizarGato(gato: Gato): Observable<Gato>{
    return this.http.post<Gato>(`${this.baseUrl}gato`, gato).pipe(map((res) => res))
  }

  marcarLike(idGato: string, idUser: string): Observable<string> {
    const payload = {idGato, idUser}
    console.log(payload);
    return this.http.post(`${this.baseUrl}gato/${idGato}/${idUser}/like`, payload).pipe(map((res: any) => res))
  }

  solicitarAdopcion(idGato: string, idUser: string): Observable<Gato> {
    const usuarioId = { usuario: idUser}
    return this.http.post<Gato>(`${this.baseUrl}gato/adopcion/${idGato}`, usuarioId).pipe(map((res) => res))
  }

  getAdopcionesPorUsuario(idUser: string): Observable<Gato[]> {
    return this.http.get<any>(`${this.baseUrl}gato/${idUser}/adopcion`).pipe(map(res => res.resultado))
  }
}
