import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherListeIngredientComponent } from './afficher-liste-ingredient.component';

describe('AfficherListeIngredientComponent', () => {
  let component: AfficherListeIngredientComponent;
  let fixture: ComponentFixture<AfficherListeIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherListeIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherListeIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
