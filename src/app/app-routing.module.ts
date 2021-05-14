import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoHomeComponent } from './components/contacto-home/contacto-home.component';
import { ContactoInternoComponent } from './components/contacto-interno/contacto-interno.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'contacto',
    component: ContactoComponent,
    children: [
      { path: '', redirectTo: 'contacto-home', pathMatch: 'full' },
      { path: 'contacto-interno', component: ContactoInternoComponent },
      { path: 'contacto-home', component: ContactoHomeComponent },
    ],
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./components/servicios/servicios.module').then(
        (m) => m.ServiciosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
