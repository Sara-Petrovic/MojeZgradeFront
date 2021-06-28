import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { StambenazajednicaComponent } from './stambenazajednica/stambenazajednica.component';
import { VlasnikComponent } from './vlasnik/vlasnik.component';
import { VlasnikListComponent } from './vlasnik-list/vlasnik-list.component';
import { VlasnikDetailsComponent } from './vlasnik-details/vlasnik-details.component';
import { VlasnikUpdateComponent } from './vlasnik-update/vlasnik-update.component';
import { CreateSednicaComponent } from './create-sednica/create-sednica.component';
import { SednicaCreateComponent } from './sednica-create/sednica-create.component';
import { SednicaListComponent } from './sednica-list/sednica-list.component';
import { SednicaDetailsComponent } from './sednica-details/sednica-details.component';

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
    CreateSednicaComponent,
    SednicaCreateComponent,
    SednicaListComponent,
    SednicaDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
