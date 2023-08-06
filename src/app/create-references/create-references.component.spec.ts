import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReferencesComponent } from './create-references.component';

describe('CreateReferencesComponent', () => {
  let component: CreateReferencesComponent;
  let fixture: ComponentFixture<CreateReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
