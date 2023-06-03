export interface User {
  id?: number;
  nombre: string;
  correo: string;
  password?: string;
  // avatar: string;
  // lat: number;
  // lng: number;
  // me?: boolean;
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
