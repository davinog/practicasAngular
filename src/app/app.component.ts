import { Component } from '@angular/core';
import { Equipos } from 'src/app/interfaces/equipos.interface';
import { infoEquipo } from './interfaces/infoEquipo.interface';
import { FootballDataService } from './services/football-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Practicas';
 public infoEquipos: infoEquipo[] = [];

  getInfoEquipos(): infoEquipo[] {
    return this.infoEquipos;
  }

  constructor(private footballDataService: FootballDataService) {


    this.footballDataService.equipos()
      .subscribe((resp: Equipos) => {

        for (let equipo of resp.teams){
          this.infoEquipos.push(
            {
              id: equipo.id,
              urlEscudo: equipo.crestUrl,
              urlWeb: equipo.website
            }
          )

        }

        this.footballDataService.setDatoCompartidoChange(this.infoEquipos);
      })

  }

}


