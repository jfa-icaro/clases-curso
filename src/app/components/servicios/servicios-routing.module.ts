import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalesComponent } from './principales/principales.component';
import { SecundariosComponent } from './secundarios/secundarios.component';
import { ServiciosComponent } from './servicios.component';

const routes: Routes = [
  { path: '', component: ServiciosComponent, pathMatch: 'full' },
  { path: 'principales', component: PrincipalesComponent },
  { path: 'secundarios', component: SecundariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
