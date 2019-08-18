import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from '../components/registration/registration.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'table', loadChildren: '../modules/table/table.module#TableModule' },
  { path: 'cards', loadChildren: '../modules/cards/cards.module#CardsModule' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
