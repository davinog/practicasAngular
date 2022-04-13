import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../services/football-data.service';
import { Competition} from '../../interfaces/competicion.interface';


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
      .subscribe((resp: Competition) => {
        this.comp = resp;
        console.log(this.comp);
      })

  }


  get competition(): Competition {
    return this.comp;
  }

  cambiarCompeticion(){
    this.footballDataService.cambiarCompeticion();
  }

}
