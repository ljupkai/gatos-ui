import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { User } from '../auth/interfaces/user';
import { UsuarioService } from '../services/usuario.service';

export const userResolver: ResolveFn<User> = (route, state) => {
  return inject(UsuarioService)
    .getUser(route.params['_id'])
    .pipe(
      catchError((error) => {
        // inject(Router).navigate(['/']);
        console.log(error);
        return EMPTY;
      })
    );
};
