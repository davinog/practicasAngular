import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Competition } from '../interfaces/competicion.interface';
import { Partidos } from '../interfaces/partidos.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { Clasificacion } from '../interfaces/clasificacion.interface';
import { CabeceraComponent } from '../components/cabecera/cabecera.component';
import { Equipos } from '../interfaces/equipos.interface';
import { infoEquipo } from '../interfaces/infoEquipo.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private _apiKey: string = '284a0453709b4af7b0ea536d8372f9db';
  private _servicioURL: string = 'https://api.football-data.org/v2';
  private _competitionId: string = '2014';
  private datoCompartidoEvent = new BehaviorSubject< infoEquipo[]>([]);
  public datoCompartido = this.datoCompartidoEvent.asObservable();

  headerDict = {
    'X-Auth-Token': this._apiKey,
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),

  };


  constructor(private http: HttpClient) { }

  datosCompeticion(): Observable<Competition> {
    const url: string = `${this._servicioURL}/competitions/${this._competitionId}`;
    return this.http.get<Competition>(url, this.requestOptions);

  }

  datosClasificacion(): Observable<Clasificacion> {
    const url: string = `${this._servicioURL}/competitions/${this._competitionId}/standings`;
    return this.http.get<Clasificacion>(url, this.requestOptions);

  }

  partidosTemporada(): Observable<Partidos> {
    const url: string = `${this._servicioURL}/competitions/${this._competitionId}/matches`;
    return this.http.get<Partidos>(url, this.requestOptions);
  }

  equipos(): Observable<Equipos> {
    const url: string = `${this._servicioURL}/competitions/${this._competitionId}/teams`;
    return this.http.get<Equipos>(url, this.requestOptions);
  }

  cambiarCompeticion() {
    //duda: no se como hacer que se llame de nuevo a todos los servicios
    if (this._competitionId === '2014') {
      this._competitionId = 'PL';
    } else {
      this._competitionId = '2014'
    }
  }


  setDatoCompartidoChange(data:  infoEquipo[]) {
    this.datoCompartidoEvent.next(data);
  }


}
