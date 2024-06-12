import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormIrpfComponent } from './components/form-irpf/form-irpf.component';
import { CalculadoraPensionService } from '../services/calculadora-pension.service';




@NgModule({
  declarations: [
    PagesComponent,
    FormIrpfComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
    
  ], providers: [
    CalculadoraPensionService
  ],
})
export class PagesModule { }
