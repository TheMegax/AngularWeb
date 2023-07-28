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
  {fecha_cita: "1", hora_cita: '12/05/2023', tipo_atencion: "1", profesional: 'A', especialidad: "AA"},
  {fecha_cita: "2", hora_cita: '13/05/2023', tipo_atencion: "2", profesional: 'B', especialidad: "AB"},
  {fecha_cita: "3", hora_cita: '14/05/2023', tipo_atencion: "3", profesional: 'C', especialidad: "AC"},
  {fecha_cita: "4", hora_cita: '15/05/2023', tipo_atencion: "4", profesional: 'D', especialidad: "AD"},
  {fecha_cita: "5", hora_cita: '16/05/2023', tipo_atencion: "5", profesional: 'E', especialidad: "AE"},
  {fecha_cita: "6", hora_cita: '17/05/2023', tipo_atencion:"6", profesional: 'F', especialidad: "AF"},
  {fecha_cita: "7", hora_cita: '18/05/2023', tipo_atencion: "7", profesional: 'G', especialidad: "AG"},
  {fecha_cita: "8", hora_cita: '19/05/2023', tipo_atencion: "8", profesional: 'H', especialidad: "AH"},
  {fecha_cita: "9", hora_cita: '20/05/2023', tipo_atencion: "9", profesional: 'I', especialidad: "AI"},
  {fecha_cita: "10", hora_cita: '21/05/2023', tipo_atencion: "10", profesional: 'J', especialidad: "AJ"},
];

const ELEMENT_AMBULATORIO: TablaAmbulatorio[] = [
  {fecha_cita: "1", hora_cita: '12/05/2023', tipo_atencion: "1", profesional: 'A', especialidad: "AA", estado: "Atendido"},
  {fecha_cita: "2", hora_cita: '13/05/2023', tipo_atencion: "2", profesional: 'B', especialidad: "AB", estado: "No Atendido"},
  {fecha_cita: "3", hora_cita: '14/05/2023', tipo_atencion: "3", profesional: 'C', especialidad: "AC", estado: "Atendido"},
  {fecha_cita: "4", hora_cita: '15/05/2023', tipo_atencion: "4", profesional: 'D', especialidad: "AD", estado: "No Atendido"},
  {fecha_cita: "5", hora_cita: '16/05/2023', tipo_atencion: "5", profesional: 'E', especialidad: "AE", estado: "Atendido"},
  {fecha_cita: "6", hora_cita: '17/05/2023', tipo_atencion:"6", profesional: 'F', especialidad: "AF", estado: "No Atendido"},
  {fecha_cita: "7", hora_cita: '18/05/2023', tipo_atencion: "7", profesional: 'G', especialidad: "AG", estado: "Atendido"},
  {fecha_cita: "8", hora_cita: '19/05/2023', tipo_atencion: "8", profesional: 'H', especialidad: "AH", estado: "No Atendido"},
  {fecha_cita: "9", hora_cita: '20/05/2023', tipo_atencion: "9", profesional: 'I', especialidad: "AI", estado: "Atendido"},
  {fecha_cita: "10", hora_cita: '21/05/2023', tipo_atencion: "10", profesional: 'J', especialidad: "AJ", estado: "No Atendido"},
];

const ELEMENT_HOSPITAL: TablaHospital[] = [
  {numero_episodio: "1", fecha_inicio: '12/05/2023', fecha_termino: "13/05/2023", diagnostico: 'A', servicio_origen: "AA"},
  {numero_episodio: "2", fecha_inicio: '14/05/2023', fecha_termino: "15/05/2023", diagnostico: 'B', servicio_origen: "AB"},
  {numero_episodio: "3", fecha_inicio: '16/05/2023', fecha_termino: "17/05/2023", diagnostico: 'C', servicio_origen: "AC"},
  {numero_episodio: "4", fecha_inicio: '18/05/2023', fecha_termino: "19/05/2023", diagnostico: 'D', servicio_origen: "AD"},
  {numero_episodio: "5", fecha_inicio: '20/05/2023', fecha_termino: "21/05/2023", diagnostico: 'E', servicio_origen: "AE"},
  {numero_episodio: "6", fecha_inicio: '22/05/2023', fecha_termino: "23/05/2023", diagnostico: 'F', servicio_origen: "AF"},
  {numero_episodio: "7", fecha_inicio: '24/05/2023', fecha_termino: "25/05/2023", diagnostico: 'G', servicio_origen: "AG"},
  {numero_episodio: "8", fecha_inicio: '26/05/2023', fecha_termino: "27/05/2023", diagnostico: 'H', servicio_origen: "AH"},
  {numero_episodio: "9", fecha_inicio: '28/05/2023', fecha_termino: "29/05/2023", diagnostico: 'I', servicio_origen: "AI"},
  {numero_episodio: "10", fecha_inicio: '30/05/2023', fecha_termino: "31/05/2023", diagnostico: 'J', servicio_origen: "AJ"},
];

const ELEMENT_URGENCIA: TablaUrgencia[] = [
  {numero_episodio: "1", fecha_inicio: '12/05/2023', fecha_termino: "13/05/2023", diagnostico: 'A', servicio_origen: "AA"},
  {numero_episodio: "2", fecha_inicio: '14/05/2023', fecha_termino: "15/05/2023", diagnostico: 'B', servicio_origen: "AB"},
  {numero_episodio: "3", fecha_inicio: '16/05/2023', fecha_termino: "17/05/2023", diagnostico: 'C', servicio_origen: "AC"},
  {numero_episodio: "4", fecha_inicio: '18/05/2023', fecha_termino: "19/05/2023", diagnostico: 'D', servicio_origen: "AD"},
  {numero_episodio: "5", fecha_inicio: '20/05/2023', fecha_termino: "21/05/2023", diagnostico: 'E', servicio_origen: "AE"},
  {numero_episodio: "6", fecha_inicio: '22/05/2023', fecha_termino: "23/05/2023", diagnostico: 'F', servicio_origen: "AF"},
  {numero_episodio: "7", fecha_inicio: '24/05/2023', fecha_termino: "25/05/2023", diagnostico: 'G', servicio_origen: "AG"},
  {numero_episodio: "8", fecha_inicio: '26/05/2023', fecha_termino: "27/05/2023", diagnostico: 'H', servicio_origen: "AH"},
  {numero_episodio: "9", fecha_inicio: '28/05/2023', fecha_termino: "29/05/2023", diagnostico: 'I', servicio_origen: "AI"},
  {numero_episodio: "10", fecha_inicio: '30/05/2023', fecha_termino: "31/05/2023", diagnostico: 'J', servicio_origen: "AJ"},
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
