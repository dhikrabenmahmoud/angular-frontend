import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactusComponent } from './detail-contactus.component';

describe('DetailContactusComponent', () => {
  let component: DetailContactusComponent;
  let fixture: ComponentFixture<DetailContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
