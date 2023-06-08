import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Gato } from "../../interfaces/gato";
import { RouterModule } from "@angular/router";
import { User } from "src/app/auth/interfaces/user";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeart2 } from "@fortawesome/free-regular-svg-icons";
import { GatosService } from "src/app/services/gatos.service";

@Component({
  selector: "app-gato-item",
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: "./gato-item.component.html",
  styleUrls: ["./gato-item.component.css"],
})
export class GatoItemComponent {
  @Input() gato!: Gato;
  @Input() usuarioId?: string;

  icons = { faHeart, faHeart2 };

  constructor(private gatoService: GatosService) {}

  get firstImage(): string | null {
    if (this.gato && this.gato.imagen && this.gato.imagen.length > 0) {
      return this.gato.imagen[0];
    }
    return null;
  }

  isLiked() {
    return this.gato.likedBy?.includes(this.usuarioId ?? "");
  }

  toggleLike(): void {
    if (this.usuarioId) {
      const index: number | undefined = this.gato.likedBy?.indexOf(
        this.usuarioId
      );
      if (index) {
        if (index > -1) {
          this.gato.likedBy?.splice(index, 1);
        } else {
          this.gato.likedBy?.push(this.usuarioId);
          this.gato.numLikes++;
          this.gatoService.marcarLike(this.gato._id, this.usuarioId).
          subscribe();


        }

      }
    }
  }
}
