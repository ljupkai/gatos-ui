import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { GatoItemComponent } from "../gato-item/gato-item.component";

@Component({
    selector: 'app-gatos-lista',
    standalone: true,
    templateUrl: './gatos-lista.component.html',
    styleUrls: ['./gatos-lista.component.css'],
    imports: [CommonModule, GatoItemComponent]
})
export class GatosListaComponent implements OnInit {

  gatos: Gato[] = [];

  constructor(private gatosService: GatosService) {}

  ngOnInit(): void {
    this.gatosService.getGatos().subscribe((gatos) => {
      this.gatos = gatos
      this.addAbsoluteImageUrls();
    })
  }
  addAbsoluteImageUrls(): void {
    const serverBaseUrl = 'http://localhost:3000';
    this.gatos.forEach((gato) => {
      gato.absoluteImageUrl = gato.imagen.map((imageUrl) => serverBaseUrl + imageUrl);
    });
    this.gatos.forEach(gato => gato.absoluteImageUrl.forEach(g => g) )
  }
}
