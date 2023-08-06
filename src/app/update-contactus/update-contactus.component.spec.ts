import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactusComponent } from './update-contactus.component';

describe('UpdateContactusComponent', () => {
  let component: UpdateContactusComponent;
  let fixture: ComponentFixture<UpdateContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
