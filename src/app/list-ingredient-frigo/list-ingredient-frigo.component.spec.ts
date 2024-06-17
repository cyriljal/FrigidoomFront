import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngredientFrigoComponent } from './list-ingredient-frigo.component';

describe('ListIngredientFrigoComponent', () => {
  let component: ListIngredientFrigoComponent;
  let fixture: ComponentFixture<ListIngredientFrigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIngredientFrigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIngredientFrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
