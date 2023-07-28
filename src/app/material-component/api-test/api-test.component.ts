import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { FhirApiService } from 'src/app/service/fhir-api.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    CommonModule,
    DemoMaterialModule,
    MatSnackBarModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss'],
})
export class ApiTestComponent implements OnInit {
  data: any;

  constructor(private fhirApiService: FhirApiService, private authService: AuthService) {}

  ngOnInit() {
    this.getTokenAndGetData();
  }

  private getTokenAndGetData() {
    this.authService.getToken().subscribe((response: any) => {
      const token = response.access_token;
      console.log(token);
      environment.apikey = token;
      environment.oauthauth = token;

      // Call getDataByRun here to ensure it's executed after getting the token
      this.getDataByRun();
    });
  }

  getDataByRun() {
    this.fhirApiService.getPatientByRUN('666666666-14').then((res) => {
      console.log(res);
      this.data = res.data;
    });
  }
}
