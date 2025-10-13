import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'vuelos',
    loadComponent: () => import('../app/pages/vuelos/vuelos.component').then((m) => m.VuelosComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('../app/pages/register/register.component').then((m) => m.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('../app/pages/login/login.component').then((m) => m.LoginComponent)
  }

];
