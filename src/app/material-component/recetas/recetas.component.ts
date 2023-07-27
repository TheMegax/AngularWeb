import { CommonModule,} from '@angular/common';
//import { Component } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
//import { DemoMaterialModule } from 'src/app/demo-material-module';

import { Component } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";


interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, CommonModule, MatProgressBarModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressBarModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})

export class RecetasComponent {
  disabled=true;
  step: number = 0;
  color = 'primary';
  mode:any = 'determinate';
  value = 50;
  bufferValue = 75;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
  activate(){
    this.step++;
    this.disabled = false;

  }
  deactivate(){
    this.step--;
    this.disabled = true;

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
  req_despacho = new FormControl('', [Validators.required])
  req_rut = new FormControl('', [Validators.required])
  //req_sexo = new FormControl('', [Validators.required])
  req_ultimoretiro = new FormControl('', [Validators.required])
  req_telefono = new FormControl('', [Validators.required])
  req_referencia = new FormControl('', [Validators.required])

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes entrar un valor';
    }

    return this.email.hasError('email') ? 'No un email vÃ¡lido' : '';
  }
}
//@Component({
//  selector: 'app-progress',
//  standalone: true,
//  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, CommonModule, MatProgressBarModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressBarModule],
//  templateUrl: './recetas.component.html',
//  styleUrls: ['./recetas.component.scss']
//})
//export class RecetasComponent {
//  color = 'primary';
//  mode:any = 'determinate';
//  value = 50;
//  bufferValue = 75;

//}
