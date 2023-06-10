export interface GatoBase {
  nombre: string;
  edad: string;
  castrado: Boolean;
  color: string;
  descripcion: string;
  reservado: boolean;
  personalidad: string;
  numLikes: number;
  adoptado: boolean;
  imagen: string[];
  absoluteImageUrl: string[];
  imagenFiles: File[];
  likedBy?: string[];
}

export interface Gato extends GatoBase {
  _id: string;
  Adopciones?: Adopciones[];
}

export interface Adopciones {
  _id: string;
  usuario: Usuario;
  status: 'pending' | 'reservado' | 'rechazado' | 'adoptado';
  date: Date;
}

interface Usuario {
  _id: string,
  nombre: string,
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

export interface GatoWithUserId extends GatoBase {
  _id: string;
  Adopciones?: AdopcionesWithUserId[];
}

interface AdopcionesWithUserId {
  _id: string;
  usuario: string;
  status: 'pending' | 'reservado' | 'rechazado' | 'adoptado';
  date: Date;
}
