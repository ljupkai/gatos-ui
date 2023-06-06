import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, ReactiveFormsModule, NonNullableFormBuilder, Validators, AbstractControl, Form } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  @Input() modalContent!: string;


  constructor(
    public activeModal: NgbActiveModal,
    private readonly usuarioService: UsuarioService,
    private fb: NonNullableFormBuilder) {}

  encuestaForm!: FormGroup;

  nombreCompleto!: FormControl<string>;
  direccion!: FormControl<string>;
  telefono!: FormControl<string>;
  infoMudanza!: FormControl<string>;
  infoPorque!: FormControl<string>;
  infoFamilia!: FormControl<string>;
  infoCostes!: FormControl<string>;
  infoAbandonar!: FormControl<string>;
  infoMovimiento!: FormControl<string>;
  infoProteccion!: FormControl<string>;
  infoExperiencia!: FormControl<string>;
  infoProblemas!: FormControl<string>;
  infoMascotasActuales!: FormControl<string>;
  infoMascotasAnteriores!: FormControl<string>;
  infoVeterinario!: FormControl<string>;

  formFields = [
    { name: 'nombreCompleto', label: 'Nombre completo', controlName: 'nombreCompleto' },
    { name: 'direccion', label: 'Dirección', controlName: 'direccion' },
    { name: 'telefono', label: 'Teléfono de contacto', controlName: 'telefono' },
    { name: 'infoMudanza', label: 'Estás en el proceso de mudanza o tienes planificado mudarte? Qué harías si te mudas donde no se aceptan mascotas?', controlName: 'infoMudanza' },
    { name: 'infoPorque', label: 'Por qué quieres adoptar un gato?', controlName: 'infoPorque' },
    { name: 'infoFamilia', label: 'Quién vive en tu casa? Alguien tiene alergias a gatos?', controlName: 'infoFamilia' },
    { name: 'infoCostes', label: 'Cuánto estás preparado para gastar para el gato mensualmente?', controlName: 'infoCostes' },
    { name: 'infoAbandonar', label: 'Se te ocurre alguna razón por la que podrías devolver un gato al refugio?', controlName: 'infoAbandonar' },
    { name: 'infoMovimiento', label: 'Dónde va a vivir el gato? solo dentro de la casa, dentro y fuera, solo fuera..', controlName: 'infoMovimiento' },
    { name: 'infoProteccion', label: 'Estás dispuesto a poner mosquiteras o redes para proteger todas las ventanas y puertas antes de adoptar al gato?', controlName: 'infoProteccion' },
    { name: 'infoExperiencia', label: 'Cuál es tu experiencia con animales? Has tenido un gato?', controlName: 'infoExperiencia' },
    { name: 'infoProblemas', label: 'Ante una inadaptación o problema de comportamiento en el gato que adoptes, ¿qué harías?', controlName: 'infoProblemas' },
    { name: 'infoMascotasActuales', label: 'Háblanos un poco sobre las mascotas que tienes ahora; ¿todas las vacunas puestas?', controlName: 'infoMascotasActuales' },
    { name: 'infoMascotasAnteriores', label: 'Háblanos sobre tus mascotas que has tenido anteriormente. ¿Qué pasó al final?', controlName: 'infoMascotasAnteriores' },
    { name: 'infoVeterinario', label: 'Quién es tu veterinario? (Le vamos a contactar para comprobar los datos)', controlName: 'infoVeterinario' },
  ];


  ngOnInit() {
    this.nombreCompleto = this.fb.control('', Validators.required);
    this.direccion = this.fb.control('', Validators.required);
    this.telefono = this.fb.control('', Validators.required);
    this.infoMudanza = this.fb.control('', [Validators.required, Validators.minLength(20)],);
    this.infoPorque = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoFamilia = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoCostes = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoAbandonar = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoMovimiento = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoProteccion = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoExperiencia = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoProblemas = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoMascotasActuales = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoMascotasAnteriores = this.fb.control('', [Validators.required, Validators.minLength(20)]);
    this.infoVeterinario = this.fb.control('', [Validators.required, Validators.minLength(20)]);

    this.encuestaForm = this.fb.group({
      nombreCompleto: this.nombreCompleto,
      direccion: this.direccion,
      telefono: this.telefono,
      infoMudanza: this.infoMudanza,
      infoPorque: this.infoPorque,
      infoFamilia: this.infoFamilia,
      infoCostes: this.infoCostes,
      infoAbandonar: this.infoAbandonar,
      infoMovimiento: this.infoMovimiento,
      infoProteccion: this.infoProteccion,
      infoExperiencia: this.infoExperiencia,
      infoProblemas: this.infoProblemas,
      infoMascotasActuales: this.infoMascotasActuales,
      infoMascotasAnteriores: this.infoMascotasAnteriores,
      infoVeterinario: this.infoVeterinario
    });
  }

  validClasses(control: AbstractControl, validClass: string, errorClass: string) {
    return {
      [validClass]: control.touched && control.valid,
      [errorClass]: control.touched && control.invalid,
    };
  }

  onSubmit() {
    console.log(this.encuestaForm)
  }


}
