import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActualitesComponent } from './update-actualites.component';

describe('UpdateActualitesComponent', () => {
  let component: UpdateActualitesComponent;
  let fixture: ComponentFixture<UpdateActualitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActualitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
