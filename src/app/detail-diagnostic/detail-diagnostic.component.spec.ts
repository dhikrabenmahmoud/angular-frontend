import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDiagnosticComponent } from './detail-diagnostic.component';

describe('DetailDiagnosticComponent', () => {
  let component: DetailDiagnosticComponent;
  let fixture: ComponentFixture<DetailDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
