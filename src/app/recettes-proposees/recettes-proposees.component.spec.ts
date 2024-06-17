import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesProposeesComponent } from './recettes-proposees.component';

describe('RecettesProposeesComponent', () => {
  let component: RecettesProposeesComponent;
  let fixture: ComponentFixture<RecettesProposeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettesProposeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecettesProposeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
