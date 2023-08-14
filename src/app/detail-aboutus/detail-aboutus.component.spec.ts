import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAboutusComponent } from './detail-aboutus.component';

describe('DetailAboutusComponent', () => {
  let component: DetailAboutusComponent;
  let fixture: ComponentFixture<DetailAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
