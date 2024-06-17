import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecetteComponent } from './info-recette.component';

describe('InfoRecetteComponent', () => {
  let component: InfoRecetteComponent;
  let fixture: ComponentFixture<InfoRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
