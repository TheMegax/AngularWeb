import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FhirApiService {
  constructor() {}
  getPatientById(id: string) {
    const url = `${environment.fhirApi}/Patient/${id}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
  getPatientByName(name: string) {
    const url = `${environment.fhirApi}/Patient?name=${name}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
  getPatientByGivenName(given: string) {
    const url = `${environment.fhirApi}/Patient?given=${given}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
  getPatientByFamilyName(family: string) {
    const url = `${environment.fhirApi}/Patient?family=${family}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
  getAppointmentByPatientId(id: string) {
    const url = `${environment.fhirApi}/Appointment?patient=${id}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
  getPatientByRUN(run: string) {
    const url = `${environment.fhirApi}/Patient?identifier=${run}`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apikey}`,
      },
    });
  }
}
