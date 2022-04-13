import { Component, OnInit } from '@angular/core';
import { Clasificacion, Table } from 'src/app/interfaces/clasificacion.interface';
import { FootballDataService } from 'src/app/services/football-data.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styles: [
  ]
})
export class ClasificacionComponent implements OnInit {

  public tablaClasificacion!: Table[];

  constructor(private footballDataService: FootballDataService) {

  }

  ngOnInit(): void {

    this.footballDataService.datosClasificacion()
      .subscribe((resp: Clasificacion) => {
        this.tablaClasificacion = resp.standings[0].table;
      })

  }

  



}
