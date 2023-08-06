import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAboutusComponent } from './create-aboutus.component';

describe('CreateAboutusComponent', () => {
  let component: CreateAboutusComponent;
  let fixture: ComponentFixture<CreateAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
