import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AllTalentsComponent } from './pages/all-talents/all-talents.component';
import { AllproposedtalentsComponent } from './pages/allproposedtalents/allproposedtalents.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { ProposelComponent } from './pages/proposel/proposel.component';
import { CommanComponent } from './pages/register/comman/comman.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: RegisterComponent },
    { path: 'alltalents', component: AllTalentsComponent, },
    { path: 'talent', canActivate: [AuthGuard], component: CommanComponent, },
    { path: 'Proposals', component: ProposelComponent },
    { path: 'Proposals/:id', component: ProposelComponent },
    { path: 'allProposals', component: AllproposedtalentsComponent },
    { path: 'allProposals/:id', component: AllproposedtalentsComponent },
    { path: '**', component: NotfoundpageComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
