import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExpertiseComponent } from './detail-expertise.component';

describe('DetailExpertiseComponent', () => {
  let component: DetailExpertiseComponent;
  let fixture: ComponentFixture<DetailExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
