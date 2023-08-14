import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAcceuilComponent } from './detail-acceuil.component';

describe('DetailAcceuilComponent', () => {
  let component: DetailAcceuilComponent;
  let fixture: ComponentFixture<DetailAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
