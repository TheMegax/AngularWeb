import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FhirOauthService {

  constructor() { }
  getOauthToken() {
    const url = `${environment.oauthauth}/oauth2/token`;
    return axios.post(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${environment.oauthuser}`,
      },
      grant_type: 'client_credentials',
    });
  }
}
