import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStatistiqueComponent } from './create-statistique.component';

describe('CreateStatistiqueComponent', () => {
  let component: CreateStatistiqueComponent;
  let fixture: ComponentFixture<CreateStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
