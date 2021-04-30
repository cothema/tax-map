import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcIncomeTaxPersonalComponent } from './calc-income-tax-personal.component';

describe('CalcIncomeTaxPersonalComponent', () => {
  let component: CalcIncomeTaxPersonalComponent;
  let fixture: ComponentFixture<CalcIncomeTaxPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcIncomeTaxPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcIncomeTaxPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
