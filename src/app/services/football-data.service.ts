import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Competition } from '../interfaces/football.interface';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private _apiKey: string = '284a0453709b4af7b0ea536d8372f9db';
  private _servicioURL: string = 'https://api.football-data.org/v2';
  private _competitionId: string = '2014';

  //competicion
  public comp!: Competition ;

  constructor(private http: HttpClient) { }


  datosCompeticion(){

    const headerDict = {
      'X-Auth-Token': this._apiKey,
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    const url: string = `${this._servicioURL}/competitions/${this._competitionId}`;

    return this.http.get<Competition>(url, requestOptions);
    

   
    // return {
    //   "id": 2014,
    //   "area": {
    //     "id": 2224,
    //     "name": "Spain"
    //   },
    //   "name": "Primera Division",
    //   "code": "PD",
    //   "emblemUrl": "https://crests.football-data.org/PD.png",
    //   "plan": "TIER_ONE",
    //   "currentSeason": {
    //     "id": 380,
    //     "startDate": new Date("2021-08-13"),
    //     "endDate": new Date("2022-05-22"),
    //     "currentMatchday": 31,
    //     "winner": null
    //   },
    //   "seasons": [
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },
    //     {
    //       "id": 380,
    //       "startDate": new Date("2021-08-13"),
    //       "endDate": new Date("2022-05-22"),
    //       "currentMatchday": 31,
    //       "winner": null
    //     },

    //   ],
    //   "lastUpdated": new Date("2022-03-20")
    // };

  }


}
