import { Component, OnInit } from '@angular/core';
import { Clasificacion, Table } from 'src/app/interfaces/clasificacion.interface';
import { infoEquipo } from 'src/app/interfaces/infoEquipo.interface';
import { FootballDataService } from 'src/app/services/football-data.service';


@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styles: [
  ]
})
export class ClasificacionComponent implements OnInit {


  public urlIconoWww: string = "../../../assets/www.png"
  public tablaClasificacion!: Table[];

  infoEquipos!: infoEquipo[];

  constructor(private footballDataService: FootballDataService) {

  }

  ngOnInit(): void {

    this.footballDataService.datoCompartido.subscribe(
      (dato) => {
        console.log(dato)
        this.infoEquipos = dato;
      }
    )


    this.footballDataService.datosClasificacion()
      .subscribe((resp: Clasificacion) => {
        this.tablaClasificacion = resp.standings[0].table;
      })

  }

  getWebPage(idEquipo: number): string {
    console.log(this.infoEquipos)
    let equipo: infoEquipo | undefined = this.infoEquipos.find(function (infoEquipo: infoEquipo) {
      return infoEquipo.id === idEquipo;
    });

    return equipo ? equipo.urlWeb : "";

  }




}
