import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

export interface TablaFuturo {
  fecha_cita: string;
  hora_cita: string;
  tipo_atencion: string;
  profesional: string;
  especialidad: string;
}

export interface TablaAmbulatorio {
  fecha_cita: string;
  hora_cita: string;
  tipo_atencion: string;
  profesional: string;
  especialidad: string;
  estado: string;
}

export interface TablaHospital {
  numero_episodio: string;
  fecha_inicio: string;
  fecha_termino: string;
  diagnostico: string;
  servicio_origen: string;
}

export interface TablaUrgencia {
  numero_episodio: string;
  fecha_inicio: string;
  fecha_termino: string;
  diagnostico: string;
  servicio_origen: string;
}

const ELEMENT_FUTURO: TablaFuturo[] = [
  {fecha_cita: "1", hora_cita: 'Hydrogen', tipo_atencion: "1", profesional: 'H', especialidad: "ICIF"},
  {fecha_cita: "2", hora_cita: 'Helium', tipo_atencion: "2", profesional: 'He', especialidad: "ICIF"},
  {fecha_cita: "3", hora_cita: 'Lithium', tipo_atencion: "3", profesional: 'Li', especialidad: "ICIF"},
  {fecha_cita: "4", hora_cita: 'Beryllium', tipo_atencion: "4", profesional: 'Be', especialidad: "ICIF"},
  {fecha_cita: "5", hora_cita: 'Boron', tipo_atencion: "5", profesional: 'B', especialidad: "ICIF"},
  {fecha_cita: "6", hora_cita: 'Carbon', tipo_atencion:"6", profesional: 'C', especialidad: "ICIF"},
  {fecha_cita: "7", hora_cita: 'Nitrogen', tipo_atencion: "7", profesional: 'N', especialidad: "ICIF"},
  {fecha_cita: "8", hora_cita: 'Oxygen', tipo_atencion: "8", profesional: 'O', especialidad: "ICIF"},
  {fecha_cita: "9", hora_cita: 'Fluorine', tipo_atencion: "9", profesional: 'F', especialidad: "ICIF"},
  {fecha_cita: "10", hora_cita: 'Neon', tipo_atencion: "10", profesional: 'Ne', especialidad: "ICIF"},
];

const ELEMENT_AMBULATORIO: TablaAmbulatorio[] = [
  {fecha_cita: "1", hora_cita: 'Hydrogen', tipo_atencion: "1", profesional: 'H', especialidad: "ICIF", estado: "Atendido"},
  {fecha_cita: "2", hora_cita: 'Helium', tipo_atencion: "2", profesional: 'He', especialidad: "ICIF", estado: "No Atendido"},
  {fecha_cita: "3", hora_cita: 'Lithium', tipo_atencion: "3", profesional: 'Li', especialidad: "ICIF", estado: "Atendido"},
  {fecha_cita: "4", hora_cita: 'Beryllium', tipo_atencion: "4", profesional: 'Be', especialidad: "ICIF", estado: "No Atendido"},
  {fecha_cita: "5", hora_cita: 'Boron', tipo_atencion: "5", profesional: 'B', especialidad: "ICIF", estado: "Atendido"},
  {fecha_cita: "6", hora_cita: 'Carbon', tipo_atencion:"6", profesional: 'C', especialidad: "ICIF", estado: "No Atendido"},
  {fecha_cita: "7", hora_cita: 'Nitrogen', tipo_atencion: "7", profesional: 'N', especialidad: "ICIF", estado: "Atendido"},
  {fecha_cita: "8", hora_cita: 'Oxygen', tipo_atencion: "8", profesional: 'O', especialidad: "ICIF", estado: "No Atendido"},
  {fecha_cita: "9", hora_cita: 'Fluorine', tipo_atencion: "9", profesional: 'F', especialidad: "ICIF", estado: "Atendido"},
  {fecha_cita: "10", hora_cita: 'Neon', tipo_atencion: "10", profesional: 'Ne', especialidad: "ICIF", estado: "No Atendido"},
];

const ELEMENT_HOSPITAL: TablaHospital[] = [
  {numero_episodio: "1", fecha_inicio: 'Hydrogen', fecha_termino: "1", diagnostico: 'H', servicio_origen: "ICIF"},
  {numero_episodio: "2", fecha_inicio: 'Helium', fecha_termino: "2", diagnostico: 'He', servicio_origen: "ICIF"},
  {numero_episodio: "3", fecha_inicio: 'Lithium', fecha_termino: "3", diagnostico: 'Li', servicio_origen: "ICIF"},
  {numero_episodio: "4", fecha_inicio: 'Beryllium', fecha_termino: "4", diagnostico: 'Be', servicio_origen: "ICIF"},
  {numero_episodio: "5", fecha_inicio: 'Boron', fecha_termino: "5", diagnostico: 'B', servicio_origen: "ICIF"},
  {numero_episodio: "6", fecha_inicio: 'Carbon', fecha_termino:"6", diagnostico: 'C', servicio_origen: "ICIF"},
  {numero_episodio: "7", fecha_inicio: 'Nitrogen', fecha_termino: "7", diagnostico: 'N', servicio_origen: "ICIF"},
  {numero_episodio: "8", fecha_inicio: 'Oxygen', fecha_termino: "8", diagnostico: 'O', servicio_origen: "ICIF"},
  {numero_episodio: "9", fecha_inicio: 'Fluorine', fecha_termino: "9", diagnostico: 'F', servicio_origen: "ICIF"},
  {numero_episodio: "10", fecha_inicio: 'Neon', fecha_termino: "10", diagnostico: 'Ne', servicio_origen: "ICIF"},
];

const ELEMENT_URGENCIA: TablaUrgencia[] = [
  {numero_episodio: "1", fecha_inicio: 'Hydrogen', fecha_termino: "1", diagnostico: 'H', servicio_origen: "ICIF"},
  {numero_episodio: "2", fecha_inicio: 'Helium', fecha_termino: "2", diagnostico: 'He', servicio_origen: "ICIF"},
  {numero_episodio: "3", fecha_inicio: 'Lithium', fecha_termino: "3", diagnostico: 'Li', servicio_origen: "ICIF"},
  {numero_episodio: "4", fecha_inicio: 'Beryllium', fecha_termino: "4", diagnostico: 'Be', servicio_origen: "ICIF"},
  {numero_episodio: "5", fecha_inicio: 'Boron', fecha_termino: "5", diagnostico: 'B', servicio_origen: "ICIF"},
  {numero_episodio: "6", fecha_inicio: 'Carbon', fecha_termino:"6", diagnostico: 'C', servicio_origen: "ICIF"},
  {numero_episodio: "7", fecha_inicio: 'Nitrogen', fecha_termino: "7", diagnostico: 'N', servicio_origen: "ICIF"},
  {numero_episodio: "8", fecha_inicio: 'Oxygen', fecha_termino: "8", diagnostico: 'O', servicio_origen: "ICIF"},
  {numero_episodio: "9", fecha_inicio: 'Fluorine', fecha_termino: "9", diagnostico: 'F', servicio_origen: "ICIF"},
  {numero_episodio: "10", fecha_inicio: 'Neon', fecha_termino: "10", diagnostico: 'Ne', servicio_origen: "ICIF"},
];

@Component({
  selector: 'app-mis-atenciones',
  standalone: true,
  imports: [DemoMaterialModule, MatSnackBarModule, FormsModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './mis-atenciones.component.html',
  styleUrls: ['./mis-atenciones.component.scss']
})

export class MisAtencionesComponent implements AfterViewInit {
  columnas_futuro: string[] = ['fecha_cita', 'hora_cita', 'tipo_atencion', 'profesional', 'especialidad'];
  dataFuturo = new MatTableDataSource<TablaFuturo>(ELEMENT_FUTURO);

  columnas_ambulatorio: string[] = ['fecha_cita', 'hora_cita', 'tipo_atencion', 'profesional', 'especialidad', 'estado'];
  dataAmbulatorio = new MatTableDataSource<TablaAmbulatorio>(ELEMENT_AMBULATORIO);

  columnas_hospital: string[] = ['numero_episodio', 'fecha_inicio', 'fecha_termino', 'diagnostico', 'servicio_origen'];
  dataHospital = new MatTableDataSource<TablaHospital>(ELEMENT_HOSPITAL);

  columnas_urgencia: string[] = ['numero_episodio', 'fecha_inicio', 'fecha_termino', 'diagnostico', 'servicio_origen'];
  dataUrgencia = new MatTableDataSource<TablaUrgencia>(ELEMENT_URGENCIA);

  @ViewChild('paginator1')
  paginator1!: MatPaginator;

  @ViewChild('paginator2')
  paginator2!: MatPaginator;

  @ViewChild('paginator3')
  paginator3!: MatPaginator;

  @ViewChild('paginator4')
  paginator4!: MatPaginator;

  ngAfterViewInit() {
    this.dataFuturo.paginator = this.paginator1;
    this.dataAmbulatorio.paginator = this.paginator2;
    this.dataHospital.paginator = this.paginator3;
    this.dataUrgencia.paginator = this.paginator4;
  }

  _setDataSource(indexNumber : number) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataFuturo.paginator ? this.dataFuturo.paginator = this.paginator1 : null;
          break;
        case 1:
          !this.dataAmbulatorio.paginator ? this.dataAmbulatorio.paginator = this.paginator2 : null;
          break;
        case 2:
          !this.dataHospital.paginator ? this.dataHospital.paginator = this.paginator3 : null;
          break;
        case 3:
          !this.dataUrgencia.paginator ? this.dataUrgencia.paginator = this.paginator4 : null;
      }
    });
  }
}
