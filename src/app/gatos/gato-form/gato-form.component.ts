import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder, Form, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GatosService } from 'src/app/services/gatos.service';
import { Gato, GatoBase } from 'src/app/interfaces/gato';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-gato-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gato-form.component.html',
  styleUrls: ['./gato-form.component.css']
})
export class GatoFormComponent implements OnInit {
  gatoForm!: FormGroup;
  nuevoGato!: GatoBase;
  saved = false;

  nombre!: FormControl<string>;
  edad!: FormControl<string>;
  castrado!: FormControl<Boolean>;
  color!: FormControl<string>;
  descripcion!: FormControl<string>;
  personalidad!: FormControl<string>;
  imagen!: FormArray;

  constructor(
    private readonly router: Router,
    private readonly gatoService: GatosService,
    private fb: NonNullableFormBuilder
  ) { this.resetGato(); }

  ngOnInit() {
    this.nombre = this.fb.control('', Validators.required),
      this.edad = this.fb.control('', Validators.required),
      this.castrado = this.fb.control(false),
      this.color = this.fb.control('', Validators.required),
      this.descripcion = this.fb.control('', Validators.required),
      this.personalidad = this.fb.control('', Validators.required),
      this.imagen = this.fb.array([])

    this.gatoForm = this.fb.group({
      nombre: this.nombre,
      edad: this.edad,
      castrado: this.castrado,
      color: this.color,
      descripcion: this.descripcion,
      personalidad: this.personalidad,
      imagen: this.imagen,

    })
  }

  validClasses(control: AbstractControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid,
    };
  }

  resetGato(): void {
    this.nuevoGato = {
      ...this.nuevoGato,
      nombre: '',
      edad: '',
      castrado: false,
      color: '',
      descripcion: '',
      personalidad: '',
      imagen: []
    };
    this.saved = false;
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const files = Array.from(fileInput.files);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.addEventListener ('loadend', (event) => {
        const base64String = reader.result as string;
        this.nuevoGato.imagen.push(base64String);
      });

      reader.readAsDataURL(files[i]);
    }
  }

  redirectHome() {
    this.router.navigate(['/']);
  }


  onSubmit() {
    if (this.gatoForm.valid) {
      console.log(this.gatoForm)
      this.nuevoGato = {
        ...this.nuevoGato,
        nombre: this.gatoForm.get('nombre')?.value,
        edad: this.gatoForm.get('edad')?.value,
        castrado: this.gatoForm.get('castrado')?.value,
        color: this.gatoForm.get('color')?.value,
        descripcion: this.gatoForm.get('descripcion')?.value,
        personalidad: this.gatoForm.get('personalidad')?.value,
      };


      this.gatoService.crearGato(this.nuevoGato).pipe(map((gato) => {
        this.nuevoGato = gato;
        this.saved = true;
      }), tap(() => this.redirectHome())).subscribe({ error: (error) => console.log(error),
      })
    }
  }

  canDeactivate() {
    return (
      this.saved ||
      this.gatoForm.pristine ||
      confirm('Salir del formulario sin completar?')
    );
  }

}
