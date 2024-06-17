import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigoEvenementComponent } from './frigo-evenement.component';

describe('FrigoEvenementComponent', () => {
  let component: FrigoEvenementComponent;
  let fixture: ComponentFixture<FrigoEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrigoEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrigoEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
