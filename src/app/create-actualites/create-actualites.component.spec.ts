import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActualitesComponent } from './create-actualites.component';

describe('CreateActualitesComponent', () => {
  let component: CreateActualitesComponent;
  let fixture: ComponentFixture<CreateActualitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActualitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
