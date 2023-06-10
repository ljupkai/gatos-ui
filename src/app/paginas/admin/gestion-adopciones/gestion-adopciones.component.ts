import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gato } from 'src/app/interfaces/gato';
import { GatosService } from 'src/app/services/gatos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/auth/interfaces/user';
import { RouterLink } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gestion-adopciones',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gestion-adopciones.component.html',
  styleUrls: ['./gestion-adopciones.component.css']
})
export class GestionAdopcionesComponent implements OnInit {

  gatos!: Gato[];
  adopciones: any[] = [];
  activeIndex: number = -1;


  constructor(
    private readonly gatoService: GatosService,
    private readonly modalService: NgbModal,
  ) { }

  ngOnInit() {


    this.gatoService.getGatosConUserdata().subscribe({
      next: (gatos: Gato[]) => {
        this.gatos = gatos;
        this.adopciones = gatos.flatMap((gato) => {
          return gato.Adopciones?.map((adopcion) => {
              return {
                userId: adopcion.usuario?._id,
                userName: adopcion.usuario?.nombre,
                adopcionId: adopcion._id,
                gatoName: gato.nombre,
                gatoId: gato._id,
                date: adopcion.date,
                status: adopcion.status,
                nombreCompleto: adopcion.usuario?.nombreCompleto,
                telefono: adopcion.usuario?.telefono,
                direccion: adopcion.usuario?.direccion,
                infoMudanza: adopcion.usuario?.infoMudanza,
                infoPorque: adopcion.usuario?.infoPorque,
                infoFamilia: adopcion.usuario?.infoFamilia,
                infoCostes: adopcion.usuario?.infoCostes,
                infoAbandonar: adopcion.usuario?.infoAbandonar,
                infoMovimiento: adopcion.usuario?.infoMovimiento,
                infoProteccion: adopcion.usuario?.infoProteccion,
                infoExperiencia: adopcion.usuario?.infoExperiencia,
                infoProblemas: adopcion.usuario?.infoProblemas,
                infoMascotasActuales: adopcion.usuario?.infoMascotasActuales,
                infoMascotasAnteriores: adopcion.usuario?.infoMascotasAnteriores,
                infoVeterinario: adopcion.usuario?.infoVeterinario,
              };

          });
        });
        this.adopciones.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });;

      },
      error: (error) => console.log(error)
    })
  }

  open(content: any, index: number) {
    this.activeIndex = index;
    this.modalService.open(content, { size: 'xl'}).result.then(
      (result) => {
        console.log('Modal closed:', result);
        ;
      },
      (reason) => {
        console.log('Modal dismissed:', reason);;
      },
    );
  }

  actualizarStatus(gatoId: string, adopcionId: string, event: any) {
    let status = event.target.value;
    this.gatoService.cambiarStatus(gatoId, adopcionId, status).subscribe();
  }
}
