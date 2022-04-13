import { Component, OnInit } from '@angular/core';
import { Competition, Season } from 'src/app/interfaces/competicion.interface';
import { FootballDataService } from 'src/app/services/football-data.service';
import { Partidos } from '../../interfaces/partidos.interface';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styles: [
  ]
})
export class TemporadasComponent implements OnInit {

  public temporadas!: Season[];

  constructor(private footballDataService: FootballDataService) {

  }

  ngOnInit(): void {

    this.footballDataService.datosCompeticion()
      .subscribe((resp: Competition) => {
        this.temporadas = resp.seasons;
        console.log(this.temporadas);
      })

  }


  //desabilitado por ahora, peta la aplicacion al no tener un limite en la peticion  y ademas no 
  // creo qeu sea la manera ni de lejos mas optima de extraer este dato

  // numeroPartidos(seasonId: number): number {
  //   let contador: number = 0;

  //   this.footballDataService.partidosTemporada()
  //     .subscribe((resp: Partidos) => {
  //       for (var i = 0; i < resp.matches.length; i++) {

  //         if (resp.matches[i].season.id == seasonId) contador++;

  //       }
  //     })

  //   return contador
  // }




}
