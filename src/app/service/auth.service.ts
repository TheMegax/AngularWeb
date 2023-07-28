import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = 'grupo8';
  private clientSecret = 'EjnR8ZAJAO';
  private tokenEndpoint = 'https://auth-server.igamalab.cl/oauth2/token';

  constructor(private http: HttpClient) {}

  getBasicAuthHeader(): string {
    return btoa(`${this.clientId}:${this.clientSecret}`);
  }

  getToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${this.getBasicAuthHeader()}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(this.tokenEndpoint, 'grant_type=client_credentials', httpOptions);
  }
}
