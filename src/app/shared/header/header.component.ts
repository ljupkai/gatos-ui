import { AfterViewInit, Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/auth/interfaces/user";
import { UsuarioService } from "src/app/services/usuario.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  displayLinks = false;
  private subscribe!: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
    private readonly router: Router
  ) {
    this.authService.loginChange$.subscribe(
      (logged) => (this.displayLinks = logged)
    );

  }

  ngOnInit() {

    // if (localStorage.getItem('token')) {
    //   this.usuarioService.getUser('me').subscribe({
    //     next: (usuario) => {
    //
    //     }
    //   })
    //   }

    this.subscribe = this.authService.isLogged().subscribe({next: (loggedIn) => (loggedIn)});

  }

  logout(): void {
    this.authService.logout();
    console.log("hola");
    this.router.navigate(["/auth/login"]);
    this.subscribe.unsubscribe();
    }
}
