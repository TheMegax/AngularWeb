import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { FhirApiService } from 'src/app/service/fhir-api.service';
@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [DemoMaterialModule, MatSnackBarModule, FormsModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss'],
})
export class ApiTestComponent {
  data: any;
  constructor(private fhirApiService: FhirApiService) {}
  ngOnInit() {
    this.getDataByRun();
  }
  getDataByRun() {
    this.fhirApiService.getPatientByRUN('666666666-14').then((res) => {
      console.log(res);
      this.data = res.data;
    });
  }
}
