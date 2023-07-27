import { Component } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


interface InternalString {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [DemoMaterialModule, NgForOf, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})

export class MisDatosComponent {
  constructor(public snackBar: MatSnackBar) { }

  step: number = 0;
  disabled = false;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  genders: InternalString[] = [
    {value: 'MASCULINO', viewValue: 'Masculino'},
    {value: 'FEMENINO', viewValue: 'Femenino'},
    {value: 'TRANSGENERO', viewValue: 'Otro'},
  ];

  vias: InternalString[] = [
    {value: 'CALLE', viewValue: 'Calle'},
    {value: 'CONDOMINIO', viewValue: 'Condominio'},
  ];

  regiones: InternalString[] = [
    {value: 'RM', viewValue: 'Región Metropolitana de Santiago'},
    {value: 'AP', viewValue: 'Región de Arica y Parinacota'},
    {value: 'TA', viewValue: 'Región de Tarapacá'},
    {value: 'AN', viewValue: 'Región de Antofagasta'},
    {value: 'AT', viewValue: 'Región de Atacama'},
    {value: 'CO', viewValue: 'Región de Coquimbo'},
    {value: 'VA', viewValue: 'Región de Valparaíso'},
    {value: 'LI', viewValue: 'Región del Libertador General Bernardo O\'Higgins'},
    {value: 'ML', viewValue: 'Región de Maule'},
    {value: 'NB', viewValue: 'Región de Ñuble'},
    {value: 'BI', viewValue: 'Región de Biobío'},
    {value: 'AR', viewValue: 'Región de La Araucanía'},
    {value: 'LR', viewValue: 'Región de Los Ríos'},
    {value: 'LL', viewValue: 'Región de Los Lagos'},
    {value: 'AI', viewValue: 'Región de Aysén del General Carlos Ibáñez del Campo'},
    {value: 'MA', viewValue: 'Región de Magallanes y de la Antártica Chilena'},
  ];

  req_nombres = new FormControl('', [Validators.required])
  req_apellido1 = new FormControl('', [Validators.required])
  req_apellido2 = new FormControl('', [Validators.required])
  req_edad = new FormControl('', [Validators.required])
  req_rut = new FormControl('', [Validators.required])
  req_sexo = new FormControl('', [Validators.required])
  req_telefono = new FormControl('', [Validators.required])
  req_via = new FormControl('', [Validators.required])
  req_via_nombre = new FormControl('', [Validators.required])
  req_via_numero = new FormControl('', [Validators.required])
  req_region = new FormControl('', [Validators.required])
  req_ciudad = new FormControl('', [Validators.required])
  req_comuna = new FormControl('', [Validators.required])

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes entrar un valor';
    }

    return this.email.hasError('email') ? 'No un email válido' : '';
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
