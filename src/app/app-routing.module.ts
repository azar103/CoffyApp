import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ListCofeeComponent } from './listCofee/list-cofee/list-cofee.component';
import { CreateCofeeComponent } from './listCofee/create-cofee/create-cofee.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
     {path: 'auth', component: SigninComponent},
     {path: 'signup', component: SignupComponent},
     {path: 'coffees', canActivate: [AuthGuardService], component: ListCofeeComponent},
     {path: 'coffee', canActivate: [AuthGuardService], component: CreateCofeeComponent},
     {path: '', component: SigninComponent},
     {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
