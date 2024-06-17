import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleRecetteComponent } from './nouvelle-recette.component';

describe('NouvelleRecetteComponent', () => {
  let component: NouvelleRecetteComponent;
  let fixture: ComponentFixture<NouvelleRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleRecetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
