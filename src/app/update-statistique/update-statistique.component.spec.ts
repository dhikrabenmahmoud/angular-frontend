import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatistiqueComponent } from './update-statistique.component';

describe('UpdateStatistiqueComponent', () => {
  let component: UpdateStatistiqueComponent;
  let fixture: ComponentFixture<UpdateStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
