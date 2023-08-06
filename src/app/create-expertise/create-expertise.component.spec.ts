import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpertiseComponent } from './create-expertise.component';

describe('CreateExpertiseComponent', () => {
  let component: CreateExpertiseComponent;
  let fixture: ComponentFixture<CreateExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
