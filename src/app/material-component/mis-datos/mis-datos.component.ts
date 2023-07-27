import { Component } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";


interface Gender {
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

  genders: Gender[] = [
    {value: 'MASCULINO', viewValue: 'Masculino'},
    {value: 'FEMENINO', viewValue: 'Femenino'},
    {value: 'TRANSGENERO', viewValue: 'Otro'},
  ];

  req_nombres = new FormControl('', [Validators.required])
  req_apellido1 = new FormControl('', [Validators.required])
  req_apellido2 = new FormControl('', [Validators.required])
  req_edad = new FormControl('', [Validators.required])
  req_rut = new FormControl('', [Validators.required])
  req_sexo = new FormControl('', [Validators.required])
  req_telefono = new FormControl('', [Validators.required])

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes entrar un valor';
    }

    return this.email.hasError('email') ? 'No un email válido' : '';
  }
}
