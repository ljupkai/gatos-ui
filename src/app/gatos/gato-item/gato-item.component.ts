import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gato } from '../../interfaces/gato'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gato-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gato-item.component.html',
  styleUrls: ['./gato-item.component.css']
})
export class GatoItemComponent {
  @Input() gato!: Gato;

  get firstImage(): string | null {
    if (this.gato && this.gato.imagen && this.gato.imagen.length > 0) {
      return this.gato.imagen[0]
    }
    return null;
  }
}

