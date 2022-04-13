import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Competition } from '../interfaces/competicion.interface';
import { Partidos } from '../interfaces/partidos.interface';
import { Observable } from 'rxjs';
import { Clasificacion } from '../interfaces/clasificacion.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private _apiKey: string = '284a0453709b4af7b0ea536d8372f9db';
  private _servicioURL: string = 'https://api.football-data.org/v2';
  private _competitionId: string = 'PL';



  //competicion
  public comp!: Competition;

  constructor(private http: HttpClient) { }






  datosCompeticion() {

    const headerDict = {
      'X-Auth-Token': this._apiKey,
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      
    };

    const url: string = `${this._servicioURL}/competitions/${this._competitionId}`;

    return this.http.get<Competition>(url, requestOptions);

  }



  datosClasificacion(): Observable<Clasificacion> {

    const headerDict = {
      'X-Auth-Token': this._apiKey,
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      
    };

    const url: string = `${this._servicioURL}/competitions/${this._competitionId}/standings`;

    return this.http.get<Clasificacion>(url, requestOptions);

  }


    
  
    partidosTemporada():Observable<Partidos> {
      const headerDict = {
        'X-Auth-Token': this._apiKey,
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
  
      const url: string = `${this._servicioURL}/competitions/${this._competitionId}/matches`;
  
      return this.http.get<Partidos>(url, requestOptions);
    }
  
 

}
