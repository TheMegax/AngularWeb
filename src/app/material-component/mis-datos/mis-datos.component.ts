import { Component } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";


interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [DemoMaterialModule, NgForOf, FormsModule],
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
}
