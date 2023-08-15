import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStatistiqueComponent } from './detail-statistique.component';

describe('DetailStatistiqueComponent', () => {
  let component: DetailStatistiqueComponent;
  let fixture: ComponentFixture<DetailStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
