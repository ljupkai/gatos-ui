import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { Observer, forkJoin } from 'rxjs';
import { GatoItemComponent } from 'src/app/gatos/gato-item/gato-item.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, GatoItemComponent, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario!: User;
  favoritos: Gato[] = [];
  adopciones: Gato[] = [];
  isAdmin?: boolean;

  constructor(private router: Router,
    private route: ActivatedRoute, private gatosService: GatosService, private modalService: NgbModal, private modalConfig: NgbModalConfig, private usuarioService: UsuarioService) {
    modalConfig.backdrop = 'static';
    modalConfig.keyboard = false;
  }

  ngOnInit() {

    this.route.data.subscribe(({user}) => this.usuario = user)

    if (this.usuario) {
      this.isAdmin = this.usuario.roles?.includes('admin');
      console.log('admin: ', this.isAdmin)
    }


    if (this.usuario._id) {
      this.usuarioService.getFavoritos(this.usuario._id).subscribe({
        next: (gatos) => (this.favoritos = gatos),
        error: (error) => (console.log(error))
      })
    }

    if (this.usuario._id){
    this.gatosService.getAdopcionesPorUsuario(this.usuario._id).subscribe({
      next: (gatos) => {this.adopciones = gatos;},
      error: (error) => (console.log(error))
    })}

  }

  abrirModal(content: string): void {
    const modalRef = this.modalService.open(EditarPerfilComponent, { size: 'lg'});
    modalRef.componentInstance.modalContent = content;

    modalRef.componentInstance.formularioEnviado.subscribe(() => {
        modalRef.close();
    })

    modalRef.componentInstance.closeModal.subscribe(() => {
      modalRef.close();
    })


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
