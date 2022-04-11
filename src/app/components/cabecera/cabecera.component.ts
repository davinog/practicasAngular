import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../services/football-data.service';
import { Competition, Area } from '../../interfaces/football.interface';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  private comp!: Competition;

  constructor(private footballDataService: FootballDataService) {
    
  }

  ngOnInit(): void {
   this.footballDataService.datosCompeticion()
   .subscribe((resp) => {
    this.comp = resp;
    console.log(this.comp);
   })

  }

  

  get competition(): Competition {
    
    return this.comp;

  }



}
