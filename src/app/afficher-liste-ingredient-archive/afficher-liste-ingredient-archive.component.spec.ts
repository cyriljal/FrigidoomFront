import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherListeIngredientArchiveComponent } from './afficher-liste-ingredient-archive.component';

describe('AfficherListeIngredientArchiveComponent', () => {
  let component: AfficherListeIngredientArchiveComponent;
  let fixture: ComponentFixture<AfficherListeIngredientArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherListeIngredientArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherListeIngredientArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
