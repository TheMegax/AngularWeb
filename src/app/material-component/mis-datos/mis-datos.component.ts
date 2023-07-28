import { Component } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FhirApiService} from "../../service/fhir-api.service";
import {AuthService} from "../../service/auth.service";
import {environment} from "../../../environments/environment";
import axios from 'axios';


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