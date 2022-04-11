import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = [
  // {
  //     path: 'clasificacion',
  //     component: ClasificacionComponent,
  //     pathMatch: 'full'
  // },
  // {
  //     path: 'partidos',
  //     component: PartidosComponent,
  // },
  // {
  //     path: 'temporadas',
  //     component: TemporadasComponent,
  // },
  // {
  //     path:'**',
  //     redirectTo: ''
  // }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
