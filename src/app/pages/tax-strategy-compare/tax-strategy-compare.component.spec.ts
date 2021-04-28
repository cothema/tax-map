import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxStrategyCompareComponent } from './tax-strategy-compare.component';

describe('TaxStrategyCompareComponent', () => {
  let component: TaxStrategyCompareComponent;
  let fixture: ComponentFixture<TaxStrategyCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxStrategyCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxStrategyCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
