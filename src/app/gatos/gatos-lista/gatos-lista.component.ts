import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { GatoItemComponent } from "../gato-item/gato-item.component";
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { GatosFilterPipe } from '../pipes/gatos-filter.pipe';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/auth/interfaces/user';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-gatos-lista',
    standalone: true,
    templateUrl: './gatos-lista.component.html',
    styleUrls: ['./gatos-lista.component.css'],
    imports: [CommonModule, GatoItemComponent, FontAwesomeModule, GatosFilterPipe, FormsModule]
})
export class GatosListaComponent implements OnInit {

  constructor(private gatosService: GatosService, private usuarioService: UsuarioService) {}

  gatos: Gato[] = [];
  showNoReservados = false;
  filterSearch = '';
  filterPersonalidad = '';
  icons = { faChevronDown, faSearch }
  isLoading = false;
  usuario!: User;


  ngOnInit(): void {
    this.isLoading = true;
    this.gatosService.getGatos().subscribe((gatos) => {
      this.gatos = gatos
      this.isLoading = false;
    })

    this.usuarioService.getUser('me').subscribe({
      next: (usuario) => {this.usuario = usuario},
      error: (error) => (console.log(error))
    })
  }

  setNoReservados() {
    this.showNoReservados = !this.showNoReservados;
  }
}
