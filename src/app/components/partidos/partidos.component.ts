import { Component, OnInit } from '@angular/core';
import { Match, Partidos } from 'src/app/interfaces/partidos.interface';
import { FootballDataService } from '../../services/football-data.service';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styles: [
    `

      table {
        table-layout: fixed ;
        width: 50% ;
        text-align:center;
        margin-left: auto;
        margin-right: auto;
      }
      td {
        width: 25% ;
      }

    .card{
      margin-bottom: 20px;
    }

    `
  ]
})
export class PartidosComponent implements OnInit {

  partidos: Match[] = [];

  constructor(private footballDataService: FootballDataService) { }

  ngOnInit(): void {

    this.footballDataService.partidosTemporada()
      .subscribe((resp: Partidos) => {
        this.partidos = resp.matches;
      })

  }

}
