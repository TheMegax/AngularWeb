import { CommonModule,} from '@angular/common';
//import { Component } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
//import { DemoMaterialModule } from 'src/app/demo-material-module';

import {Component, ViewChild} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DemoMaterialModule} from "../../demo-material-module";
import {RouterLink} from "@angular/router";



interface Gender {
  value: string;
  viewValue: string;
}

const ELEMENT_FUTURO: TablaFuturo[] = [
  {fecha_cita: "04/07/23", hora_cita: 'Aguda', tipo_atencion: "29/07/23", profesional: 'Valida', especialidad: "PDF"},
  {fecha_cita: "01/07/23", hora_cita: 'Cronica', tipo_atencion: "26/07/23", profesional: 'Valida', especialidad: "PDF"},
  {fecha_cita: "24/03/23", hora_cita: 'Cronica', tipo_atencion: "18/04/23", profesional: 'Vencida', especialidad: "PDF"},
  {fecha_cita: "14/01/22", hora_cita: 'Externa', tipo_atencion: "8/02/22", profesional: 'Vencida', especialidad: "PDF"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion:"-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
];

export interface TablaFuturo {
  fecha_cita: string;
  hora_cita: string;
  tipo_atencion: string;
  profesional: string;
  especialidad: string;
}

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [NgForOf, FormsModule, ReactiveFormsModule, CommonModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressBarModule, DemoMaterialModule, RouterLink],
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

  columnas_futuro: string[] = ['fecha_cita', 'hora_cita', 'tipo_atencion', 'profesional', 'especialidad'];
  dataFuturo = new MatTableDataSource<TablaFuturo>(ELEMENT_FUTURO);

  @ViewChild('paginator1')
  paginator1!: MatPaginator;

  ngAfterViewInit() {
    this.dataFuturo.paginator = this.paginator1;
  }

  _setDataSource(indexNumber : number) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataFuturo.paginator ? this.dataFuturo.paginator = this.paginator1 : null;
          break;
      }
    });
  }

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



