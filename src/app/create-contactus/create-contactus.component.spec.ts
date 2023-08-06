import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactusComponent } from './create-contactus.component';

describe('CreateContactusComponent', () => {
  let component: CreateContactusComponent;
  let fixture: ComponentFixture<CreateContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
