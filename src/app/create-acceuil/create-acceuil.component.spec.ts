import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcceuilComponent } from './create-acceuil.component';

describe('CreateAcceuilComponent', () => {
  let component: CreateAcceuilComponent;
  let fixture: ComponentFixture<CreateAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
