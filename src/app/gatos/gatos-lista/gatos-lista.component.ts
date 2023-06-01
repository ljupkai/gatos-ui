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

@Component({
    selector: 'app-gatos-lista',
    standalone: true,
    templateUrl: './gatos-lista.component.html',
    styleUrls: ['./gatos-lista.component.css'],
    imports: [CommonModule, GatoItemComponent, FontAwesomeModule, GatosFilterPipe, FormsModule]
})
export class GatosListaComponent implements OnInit {

  constructor(private gatosService: GatosService, private route: ActivatedRoute) {}

  gatos: Gato[] = [];
  showNoReservados = false;
  filterSearch = '';
  filterPersonalidad = '';
  icons = { faChevronDown, faSearch }

  ngOnInit(): void {
    this.gatosService.getGatos().subscribe((gatos) => {
      this.gatos = gatos
      console.log(gatos)
      // this.addAbsoluteImageUrls();
    })
  }

  setNoReservados() {
    this.showNoReservados = !this.showNoReservados;
  }
  // addAbsoluteImageUrls(): void {
  //   const serverBaseUrl = 'http://localhost:3000';
  //   this.gatos.forEach((gato) => {
  //     gato.absoluteImageUrl = gato.imagen.map((imageUrl) => serverBaseUrl + imageUrl);
  //   });
  //   this.gatos.forEach(gato => gato.absoluteImageUrl.forEach(g => g) )
  // }
}
