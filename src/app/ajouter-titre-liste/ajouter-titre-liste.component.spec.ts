import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTitreListeComponent } from './ajouter-titre-liste.component';

describe('AjouterTitreListeComponent', () => {
  let component: AjouterTitreListeComponent;
  let fixture: ComponentFixture<AjouterTitreListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTitreListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTitreListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
