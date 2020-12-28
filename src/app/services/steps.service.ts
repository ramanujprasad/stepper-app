import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  cardUrl = `${environment.apiUrl}steps.json`;

  constructor(private _http: HttpClient) { }

  getSteps() {
    return this._http.get(this.cardUrl);
  }
}
