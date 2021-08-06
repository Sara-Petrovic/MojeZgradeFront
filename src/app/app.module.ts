import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { StambenazajednicaComponent } from './pages/stambenazajednica/stambenazajednica.component';
import { VlasnikComponent } from './pages/vlasnik/vlasnik.component';
import { VlasnikListComponent } from './pages/vlasnik-list/vlasnik-list.component';
import { VlasnikDetailsComponent } from './pages/vlasnik-details/vlasnik-details.component';
import { VlasnikUpdateComponent } from './pages/vlasnik-update/vlasnik-update.component';
import { SednicaCreateComponent } from './pages/sednica-create/sednica-create.component';
import { SednicaListComponent } from './pages/sednica-list/sednica-list.component';
import { SednicaDetailsComponent } from './pages/sednica-details/sednica-details.component';
import { StambenazajednicaListComponent } from './pages/stambenazajednica-list/stambenazajednica-list.component';
import { StambenazajednicaDetailsComponent } from './pages/stambenazajednica-details/stambenazajednica-details.component';
import { RacunListComponent } from './pages/racun-list/racun-list.component';
import { RacunComponent } from './pages/racun/racun.component';
import { RacunDetailsComponent } from './pages/racun-details/racun-details.component';
import { NavFooterComponent } from './components/footer/nav-footer.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UslugaComponent } from './pages/usluga/usluga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    StambenazajednicaComponent,
    VlasnikComponent,
    VlasnikListComponent,
    VlasnikDetailsComponent,
    VlasnikUpdateComponent,
    SednicaCreateComponent,
    SednicaListComponent,
    SednicaDetailsComponent,
    StambenazajednicaListComponent,
    StambenazajednicaDetailsComponent,
    RacunListComponent,
    RacunComponent,
    RacunDetailsComponent,
    NavFooterComponent,
    HomeComponent,
    HeaderComponent,
    UslugaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
