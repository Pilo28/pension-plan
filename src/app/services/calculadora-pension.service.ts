import { Injectable } from '@angular/core';
import { ICalculadoraPension } from '../models/ic-calculadora-pension';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraPensionService implements ICalculadoraPension {
  private pensionFisico!: number;
  private pensionEmpresa!: number;
  private pensionAutonomo!: number;
  private sueldo!: number;



  public calcularRetencion(sueldo: number): number {
    if (sueldo <= 12450) return 19;
    if (sueldo <= 20199) return 24;
    if (sueldo <= 35199) return 30;
    if (sueldo <= 59999) return 37;
    if (sueldo <= 299999) return 45;
    return 47;
  }

  public calcularDesgravacion(totalInversion: number, retencion: number): number {
    return (totalInversion / retencion) / 100;
  }
}
