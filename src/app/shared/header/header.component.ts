import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{

  displayLinksUser = false;

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  ngAfterViewInit(): void {
    this.authService.loginChange$
      .pipe(
        tap((value) => {
          this.displayLinksUser = value;
        })
      )
      .subscribe();
  }

   logout(): void {
    this.authService.logout();
    console.log("hola");
    this.router.navigate(['/auth/login']);
  }

}
