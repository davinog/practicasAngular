import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';



const routes: Routes = [
  {
      path: '',
      component: ClasificacionComponent,
      pathMatch: 'full'
  },
  {
      path: 'partidos',
      component: PartidosComponent,
  },
  {
      path: 'temporadas',
      component: TemporadasComponent,
  },
  {
      path:'**',
      redirectTo: 'clasificacion'
  }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
