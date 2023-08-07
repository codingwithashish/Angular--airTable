import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { CommanComponent } from './pages/register/comman/comman.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProposelComponent } from './pages/proposel/proposel.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { AllTalentsComponent } from './pages/all-talents/all-talents.component';
import { AllproposedtalentsComponent } from './pages/allproposedtalents/allproposedtalents.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CommanComponent,
    ProposelComponent,
    NotfoundpageComponent,
    AllTalentsComponent,
    AllproposedtalentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
