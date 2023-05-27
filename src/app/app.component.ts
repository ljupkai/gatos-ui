import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet, RouterLink, RouterLinkActive,]
})
export class AppComponent {
  title = 'gato-prueba';
}
