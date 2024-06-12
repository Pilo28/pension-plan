import { TestBed } from '@angular/core/testing';

import { CalculadoraPensionService } from './calculadora-pension.service';

describe('CalculadoraPensionService', () => {
  let service: CalculadoraPensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraPensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
