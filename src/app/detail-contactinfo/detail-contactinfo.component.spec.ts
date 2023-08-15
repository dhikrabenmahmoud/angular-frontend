import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactinfoComponent } from './detail-contactinfo.component';

describe('DetailContactinfoComponent', () => {
  let component: DetailContactinfoComponent;
  let fixture: ComponentFixture<DetailContactinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContactinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
