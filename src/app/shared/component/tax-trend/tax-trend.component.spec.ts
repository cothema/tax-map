import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxTrendComponent } from './tax-trend.component';

describe('TaxTrendComponent', () => {
  let component: TaxTrendComponent;
  let fixture: ComponentFixture<TaxTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
