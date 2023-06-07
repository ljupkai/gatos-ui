import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  displayLinks = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    ) {
      this.authService.loginChange$.subscribe((logged) => this.displayLinks = logged);
    }



  // ngAfterViewInit(): void {
  //   this.authService.loginChange$
  //     .pipe(
  //       tap((value) => {
  //         this.displayLinks = !value;
  //       })
  //     )
  //     .subscribe();
  // }

  // ngOnInit(): void {
  //   this.authService.loginChange$
  //     .pipe(
  //       tap((logged) => {
  //         this.displayLinks = !logged;
  //       }),
  //       filter(() => this.router.url !== '/auth/login') // Filter out navigation to the login page
  //     )
  //     .subscribe();
  // }

   logout(): void {
    this.authService.logout();
    console.log("hola");
    this.router.navigate(['/auth/login']);
  }

}
