import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { AtletaListComponent } from './component/atleta/atleta-list-component/atleta-list-component';
export const routes: Routes = [

  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "cadastroAtleta",
    component: AtletaComponent
  },

  {
    path: "corrida",
    component: CorridaComponent
  },


  {
   path: "atletaListComponent",
   component: AtletaListComponent
 },

 

]; 