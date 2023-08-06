import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAcceuilComponent } from './update-acceuil.component';

describe('UpdateAcceuilComponent', () => {
  let component: UpdateAcceuilComponent;
  let fixture: ComponentFixture<UpdateAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
