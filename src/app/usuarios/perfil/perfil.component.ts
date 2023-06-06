import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { Observer, forkJoin } from 'rxjs';
import { GatoItemComponent } from 'src/app/gatos/gato-item/gato-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, GatoItemComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario!: User;
  favoritos: Gato[] = [];

  constructor(private route: ActivatedRoute, private gatosService: GatosService, private modalService: NgbModal) {}

  ngOnInit() {
    this.usuario = this.route.snapshot.data['user']['usuario'];

    //Obtener el array de los objetos gatos desde favoritos
    const observables = this.usuario.favoritos?.map(fav => this.gatosService.getGato(fav));

    if (observables && observables.length > 0) {
      const observer: Observer<Gato[]> = {
        next: (gatos: any) => {
          this.favoritos = gatos;
          console.log(gatos);
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
          // Optional: Handle completion if needed
        }
      };

      forkJoin(observables).subscribe(observer);
    } else {
      console.log('hola');
    }
  }

  abrirModal(content: string): void {
    const modalRef = this.modalService.open(EditarPerfilComponent, { size: 'lg'});
    modalRef.componentInstance.modalContent = content;
    modalRef.result.then( // Modal closed
    (result) => {
      console.log('Modal closed:', result);
    },
    // Modal dismissed
    (reason) => {
      console.log('Modal dismissed:', reason);
    })
  }
}
