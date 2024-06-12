import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIrpfComponent } from './form-irpf.component';

describe('FormIrpfComponent', () => {
  let component: FormIrpfComponent;
  let fixture: ComponentFixture<FormIrpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIrpfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormIrpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
