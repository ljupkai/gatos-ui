export interface Gato {
  _id: string;
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
