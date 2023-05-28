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
  @Input() gatoItem: Gato | null = null;

  get firstImage(): string | null {
    if (this.gatoItem && this.gatoItem.imagen && this.gatoItem.imagen.length > 0) {
      return this.gatoItem.imagen[0]
    }
    return null;
  }
}

