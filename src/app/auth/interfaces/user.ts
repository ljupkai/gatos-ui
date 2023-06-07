export interface User {
  _id?: string;
  nombre: string;
  correo: string;
  password?: string;
  favoritos?: string[];
  imagenes?: string[];
  nombreCompleto?: string;
  direccion?: string;
  telefono?: string;
  infoMudanza?: string;
  infoPorque?: string;
  infoFamilia?: string;
  infoCostes?: string;
  infoAbandonar?: string;
  infoMovimiento?: string;
  infoProteccion?: string;
  infoExperiencia?: string;
  infoProblemas?: string;
  infoMascotasActuales?: string;
  infoMascotasAnteriores?: string;
  infoVeterinario?: string;
}

export interface UserRequest {
  id: number;
  nombre: string;
  correo: string;
  // avatar: string;
  // lat: number;
  // lng: number;
}
export interface UserLogin {
  email: string;
  password: string;
  // lat?: number;
  // lng?: number;
}

export interface ResponseUser {
  user: User;
}

export interface UserEncuesta {
  nombreCompleto: string;
  direccion: string;
  telefono: string;
  infoMudanza: string;
  infoPorque: string;
  infoFamilia: string;
  infoCostes: string;
  infoAbandonar: string;
  infoMovimiento: string;
  infoProteccion: string;
  infoExperiencia: string;
  infoProblemas: string;
  infoMascotasActuales: string;
  infoMascotasAnteriores: string;
  infoVeterinario: string;
}
