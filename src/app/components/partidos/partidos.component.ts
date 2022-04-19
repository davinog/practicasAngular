import { Component, OnInit, SimpleChanges } from '@angular/core';
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

  partidos2: Match[][] = [[]];
 



  constructor(private footballDataService: FootballDataService) { }

  ngOnInit(): void {

    this.footballDataService.partidosTemporada()
      .subscribe((resp: Partidos) => {
        console.log(resp.matches);

        for (let i = 0; i < resp.matches[0].season.currentMatchday; i++) {
          this.partidos2[i] = resp.matches.filter((p) => p.matchday == i+1)
        }
        
      })

  }




}
