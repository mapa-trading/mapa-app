import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { RegisterComponent } from './register/register.component';

/*
const routes: Routes = [
  {   path: '',            component: LoginComponent    },
  {   path: 'login',       component: LoginComponent    },
  {   path: '', redirectTo: 'login', pathMatch: 'full'  },
  {   path: 'register',    component: RegisterComponent },
  {   path: 'recover',     component: RecoverComponent  },    
  { 
      path: 'home',        component: HomeComponent,
      children: [    
        {   path: 'tela1', },
        {   path: 'tela2', },
        {   path: 'tela3', }
      ]
  }
]*/
const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
