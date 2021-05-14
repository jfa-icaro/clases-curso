import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { PrincipalesComponent } from './principales/principales.component';
import { SecundariosComponent } from './secundarios/secundarios.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    PrincipalesComponent,
    SecundariosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
