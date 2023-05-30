import { ResolveFn, Router } from "@angular/router";
import { GatosService } from "../services/gatos.service";
import { EMPTY, catchError } from "rxjs";
import { inject } from "@angular/core";
import { Gato } from "../interfaces/gato";

export const gatosResolver: ResolveFn<Gato> = (route, state) =>
{
  return inject(GatosService).getGato(route.params['_id']).pipe(catchError((error) => {
    inject (Router).navigate(['/gatos/donar']);
    return EMPTY;
  }))

}
