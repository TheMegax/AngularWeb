
import {DemoMaterialModule} from 'src/app/demo-material-module';
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {RouterLink} from "@angular/router";
//import {TablaFuturo} from "../mis-atenciones/mis-atenciones.component";
//import { } from '@angular/forms';


interface InternalString {
  value: string;
  viewValue: string;
}

export interface TablaFuturo {
  fecha_cita: string;
  hora_cita: string;
  tipo_atencion: string;
  profesional: string;
  especialidad: string;
}

const ELEMENT_FUTURO: TablaFuturo[] = [
  {fecha_cita: "04/07/23", hora_cita: 'Queja', tipo_atencion: "29/07/23", profesional: 'En espera', especialidad: "PDF"},
  {fecha_cita: "01/07/23", hora_cita: 'Queja', tipo_atencion: "26/07/23", profesional: 'Respondida', especialidad: "PDF"},
  {fecha_cita: "24/03/23", hora_cita: 'Pregunta', tipo_atencion: "18/04/23", profesional: 'Respondida', especialidad: "PDF"},
  {fecha_cita: "14/01/22", hora_cita: 'Pregunta', tipo_atencion: "8/02/22", profesional: 'Respondida', especialidad: "PDF"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion:"-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
  {fecha_cita: "-", hora_cita: '-', tipo_atencion: "-", profesional: '-', especialidad: "-"},
];
@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [DemoMaterialModule, NgForOf, FormsModule, ReactiveFormsModule, NgIf, DemoMaterialModule, MatSnackBarModule, FormsModule, MatButtonModule, MatFormFieldModule, RouterLink],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})



export class SolicitudesComponent {

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

  isLinear = false;
  firstFormGroup: FormGroup = Object.create(null);
  secondFormGroup: FormGroup = Object.create(null);

  isLinearvarient = false;
  varientfirstFormGroup: FormGroup = Object.create(null);
  varientsecondFormGroup: FormGroup = Object.create(null);

  isLinearposition = false;
  positionfirstFormGroup: FormGroup = Object.create(null);
  positionsecondFormGroup: FormGroup = Object.create(null);


  optionalfirstFormGroup: FormGroup = Object.create(null);
  optionalsecondFormGroup: FormGroup = Object.create(null);
  isOptional = false;

  editablefirstFormGroup: FormGroup = Object.create(null);
  editablesecondFormGroup: FormGroup = Object.create(null);
  isEditable = false;

  customizefirstFormGroup: FormGroup = Object.create(null);
  customizesecondFormGroup: FormGroup = Object.create(null);

  errorfirstFormGroup: FormGroup = Object.create(null);
  errorsecondFormGroup: FormGroup = Object.create(null);

  constructor(private _formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // varient
    this.varientfirstFormGroup = this._formBuilder.group({
      varientfirstCtrl: ['', Validators.required]
    });
    this.varientsecondFormGroup = this._formBuilder.group({
      varientsecondCtrl: ['', Validators.required]
    });

    // position
    this.positionfirstFormGroup = this._formBuilder.group({
      positionfirstCtrl: ['', Validators.required]
    });
    this.positionsecondFormGroup = this._formBuilder.group({
      positionsecondCtrl: ['', Validators.required]
    });

    // optional
    this.optionalfirstFormGroup = this._formBuilder.group({
      optionalfirstCtrl: ['', Validators.required]
    });
    this.optionalsecondFormGroup = this._formBuilder.group({
      optionalsecondCtrl: ['', Validators.required]
    });

    // editable
    this.editablefirstFormGroup = this._formBuilder.group({
      editablefirstCtrl: ['', Validators.required]
    });
    this.editablesecondFormGroup = this._formBuilder.group({
      editablesecondCtrl: ['', Validators.required]
    });

    // customize
    this.customizefirstFormGroup = this._formBuilder.group({
      customizefirstCtrl: ['', Validators.required]
    });
    this.customizesecondFormGroup = this._formBuilder.group({
      customizesecondCtrl: ['', Validators.required]
    });

    // error
    this.errorfirstFormGroup = this._formBuilder.group({
      errorfirstCtrl: ['', Validators.required]
    });
    this.errorsecondFormGroup = this._formBuilder.group({
      errorsecondCtrl: ['', Validators.required]
    });
  }

  position: any = 'before';

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

}
