import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';




@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CabeceraComponent,
    MenuComponent,
    ClasificacionComponent,
    PartidosComponent,
    TemporadasComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
