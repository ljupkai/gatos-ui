import { Pipe, PipeTransform } from "@angular/core";
import { Gato } from "src/app/interfaces/gato";

@Pipe({
  name: "gatosFilter",
  standalone: true,
})
export class GatosFilterPipe implements PipeTransform {
  transform(
    gatos: Gato[],
    showNoReservados: boolean,
    search: string,
    personalidad: string
  ): Gato[] {

    const filter = search ? search.toLocaleLowerCase() : null;
    let gatosFiltrados = gatos;
    if (filter) {
      gatosFiltrados = gatosFiltrados.filter((gato) =>
              gato.nombre.toLocaleLowerCase().includes(filter) ||
              gato.color.toLocaleLowerCase().includes(filter) ||
              gato.descripcion.toLocaleLowerCase().includes(filter))
    }
    if (personalidad) {
      gatosFiltrados = gatosFiltrados.filter((gato) => gato.personalidad[0] === personalidad)
    }

    return showNoReservados
      ? gatosFiltrados.filter((gato) => !gato.castrado)
      : gatosFiltrados;
  }
}
