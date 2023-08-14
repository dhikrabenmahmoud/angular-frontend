import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReferenceComponent } from './details-reference.component';

describe('DetailsReferenceComponent', () => {
  let component: DetailsReferenceComponent;
  let fixture: ComponentFixture<DetailsReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
