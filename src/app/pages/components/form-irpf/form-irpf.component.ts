import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculadoraPensionService } from '../../../services/calculadora-pension.service';

@Component({
  selector: 'app-form-irpf',
  templateUrl: './form-irpf.component.html',
  
})
export class FormIrpfComponent implements OnInit {
  pensionForm!: FormGroup;
  desgravacion!: number;

  constructor(private fb: FormBuilder, private calculadoraService: CalculadoraPensionService) {}

  ngOnInit(): void {
    this.pensionForm = this.fb.group({
      pensionFisico: ['', [Validators.required, Validators.pattern('[0-9]*')]], // solo números
      pensionEmpresa: ['', [Validators.required, Validators.pattern('[0-9]*')]], // solo números
      pensionAutonomo: ['', [Validators.required, Validators.pattern('[0-9]*')]], // solo números
      sueldo: ['', [Validators.required, Validators.pattern('[0-9]*')]] // solo números
    });
  }

  onSubmit(): void {
    if (this.pensionForm.valid) {
      const { pensionFisico, pensionEmpresa, pensionAutonomo, sueldo } = this.pensionForm.value;
      const totalInversion = pensionFisico + pensionEmpresa + pensionAutonomo;
      const retencion = this.calculadoraService.calcularRetencion(sueldo);
      this.desgravacion = this.calculadoraService.calcularDesgravacion(totalInversion, retencion);
    }
  }
}
