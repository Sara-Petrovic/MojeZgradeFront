import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SednicaCreateComponent } from './pages/sednica-create/sednica-create.component';
import { SednicaDetailsComponent } from './pages/sednica-details/sednica-details.component';
import { SednicaListComponent } from './pages/sednica-list/sednica-list.component';
import { RacunDetailsComponent } from './pages/racun-details/racun-details.component';
import { RacunListComponent } from './pages/racun-list/racun-list.component';
import { RacunComponent } from './pages/racun/racun.component';
import { StambenazajednicaDetailsComponent } from './pages/stambenazajednica-details/stambenazajednica-details.component';
import { StambenazajednicaListComponent } from './pages/stambenazajednica-list/stambenazajednica-list.component';
import { StambenazajednicaComponent } from './pages/stambenazajednica/stambenazajednica.component';
import { VlasnikDetailsComponent } from './pages/vlasnik-details/vlasnik-details.component';
import { VlasnikListComponent } from './pages/vlasnik-list/vlasnik-list.component';
import { VlasnikUpdateComponent } from './pages/vlasnik-update/vlasnik-update.component';
import { VlasnikComponent } from './pages/vlasnik/vlasnik.component';
import { HomeComponent } from './pages/home/home.component';
import { SednicaUpdateComponent } from './pages/sednica-update/sednica-update.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'moje-zgrade',
    component: LoginsuccessComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'stambenazajednica', component: StambenazajednicaComponent },
      { path: 'vlasnikposebnogdela', component: VlasnikComponent },
      { path: 'vlasnikposebnogdela/:id', component: VlasnikListComponent },
      { path: 'vlasnici', component: VlasnikListComponent },
      { path: 'stambene-zajednice', component: StambenazajednicaListComponent },
      // { path: 'loginsuccess/stambenazajednica', redirectTo: '/stambenazajednica', pathMatch: 'full' },
      // { path: 'loginsuccess/stambene-zajednice', redirectTo: '/stambene-zajednice', pathMatch: 'full' },
      // { path: 'loginsuccess/vlasnici', redirectTo: '/vlasnici', pathMatch: 'full' },
      // { path: 'loginsuccess/vlasnikposebnogdela', redirectTo: '/vlasnikposebnogdela', pathMatch: 'full' },
      { path: 'updatevlasnik/:id', component: VlasnikUpdateComponent },
      { path: 'detailsvlasnik/:id', component: VlasnikDetailsComponent },
      { path: 'detailsstambenazajednica/:id', component: StambenazajednicaDetailsComponent },
      { path: 'racuni', component: RacunListComponent },
      // { path: 'loginsuccess/racuni', redirectTo: '/racuni', pathMatch: 'full' },
      { path: 'racun', component: RacunComponent },
      // { path: 'loginsuccess/racun', redirectTo: '/racun', pathMatch: 'full' },
      { path: 'detailsracun/:id', component: RacunDetailsComponent },
      // { path: 'loginsuccess/sednicaskupstine', redirectTo: '/sednicaskupstine', pathMatch: 'full' },
      // { path: 'loginsuccess/sednice', redirectTo: '/sednice', pathMatch: 'full' },
      { path: 'detailssednica/:id', component: SednicaDetailsComponent },
      { path: 'updatesednica/:id', component: SednicaUpdateComponent },
      { path: 'sednicaskupstine', component: SednicaCreateComponent },
      { path: 'sednice', component: SednicaListComponent },
      { path: 'updatevlasnik/:id', component: VlasnikUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
