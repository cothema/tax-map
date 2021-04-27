import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxModelFilterComponent } from './tax-model-filter.component';

describe('TaxModelFilterComponent', () => {
  let component: TaxModelFilterComponent;
  let fixture: ComponentFixture<TaxModelFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxModelFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxModelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
