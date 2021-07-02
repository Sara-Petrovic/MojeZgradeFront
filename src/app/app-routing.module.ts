import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { StambenazajednicaComponent } from './stambenazajednica/stambenazajednica.component';
import { VlasnikDetailsComponent } from './vlasnik-details/vlasnik-details.component';
import { VlasnikListComponent } from './vlasnik-list/vlasnik-list.component';
import { VlasnikUpdateComponent } from './vlasnik-update/vlasnik-update.component';
import { VlasnikComponent } from './vlasnik/vlasnik.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'stambenazajednica', component:StambenazajednicaComponent},
  {path:'vlasnikposebnogdela', component:VlasnikComponent},
  {path:'vlasnici', component:VlasnikListComponent},
  { path: 'loginsuccess/stambenazajednica',   redirectTo: '/stambenazajednica', pathMatch: 'full' },
  { path: 'loginsuccess/vlasnici',   redirectTo: '/vlasnici', pathMatch: 'full' },
  { path: 'loginsuccess/vlasnikposebnogdela',   redirectTo: '/vlasnikposebnogdela', pathMatch: 'full' },
  {path:'updatevlasnik/:id', component:VlasnikUpdateComponent},
  {path:'detailsvlasnik/:id', component:VlasnikDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
