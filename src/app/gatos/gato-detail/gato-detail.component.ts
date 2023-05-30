import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato } from 'src/app/interfaces/gato';
import { GatoItemComponent } from '../gato-item/gato-item.component';

@Component({
  selector: 'app-gato-detail',
  standalone: true,
  imports: [CommonModule, GatoItemComponent, RouterModule],
  templateUrl: './gato-detail.component.html',
  styleUrls: ['./gato-detail.component.css']
})
export class GatoDetailComponent implements OnInit{

  gato!: Gato;

  constructor(private route: ActivatedRoute, private router: Router, private gatoService: GatosService) {}

  ngOnInit() {

    this.gato = this.route.snapshot.data['gato'];
    console.log(this.route.snapshot)
    // const id = this.route.snapshot.params['_id'];

    // this.gatoService.getGato(id).subscribe(gato => { console.log(gato.nombre);this.gato = gato});

    // this.gatoService.getGato(id).subscribe({
    //   next: (resultado) => {console.log(resultado._id); this.gato = resultado},
    //   error: (error) => console.error(error),
    // })


  }

  goBack() {
    this.router.navigate(['/']);
  }

}
