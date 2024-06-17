import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementAttenteComponent } from './evenement-attente.component';

describe('EvenementAttenteComponent', () => {
  let component: EvenementAttenteComponent;
  let fixture: ComponentFixture<EvenementAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenementAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
