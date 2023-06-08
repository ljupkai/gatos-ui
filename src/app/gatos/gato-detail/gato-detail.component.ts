import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { GatoItemComponent } from '../gato-item/gato-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/auth/interfaces/user';
import { tap } from 'rxjs';
@Component({
  selector: 'app-gato-detail',
  standalone: true,
  imports: [CommonModule, GatoItemComponent, RouterModule, FontAwesomeModule],
  templateUrl: './gato-detail.component.html',
  styleUrls: ['./gato-detail.component.css']
})
export class GatoDetailComponent implements OnInit {
  icons = { faCheck, faXmark }
  gato!: Gato;
  usuario!: User;

  constructor(private route: ActivatedRoute, private router: Router, private gatoService: GatosService, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.gato = this.route.snapshot.data['gato'];

    if (localStorage.getItem('token')) {
      this.usuarioService.getUser('me').subscribe({
        next: (usuario) => {
          this.usuario = usuario
        }
      })
    }

  }

  adoptar() {
    if (!this.usuario) {
      this.router.navigate(['/auth/login']);
    }
    if (this.usuario) {
      if (this.usuario._id) {
        console.log(this.usuario._id)
        this.gatoService.solicitarAdopcion(this.gato._id, this.usuario._id).subscribe();
      }
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
