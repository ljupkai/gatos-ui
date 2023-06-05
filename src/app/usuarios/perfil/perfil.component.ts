import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario!: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.usuario = this.route.snapshot.data['user'];
    console.log(this.route.snapshot)
    console.log(this.usuario);
  }

}
