import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDetailComponent } from './tax-detail.component';

describe('TaxDetailComponent', () => {
  let component: TaxDetailComponent;
  let fixture: ComponentFixture<TaxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
