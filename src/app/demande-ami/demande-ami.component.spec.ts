import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAmiComponent } from './demande-ami.component';

describe('DemandeAmiComponent', () => {
  let component: DemandeAmiComponent;
  let fixture: ComponentFixture<DemandeAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
