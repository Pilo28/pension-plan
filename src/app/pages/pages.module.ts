import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormIrpfComponent } from './components/form-irpf/form-irpf.component';


@NgModule({
  declarations: [
    PagesComponent,
    FormIrpfComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
