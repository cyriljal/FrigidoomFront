import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherFrigoAmiComponent } from './afficher-frigo-ami.component';

describe('AfficherFrigoAmiComponent', () => {
  let component: AfficherFrigoAmiComponent;
  let fixture: ComponentFixture<AfficherFrigoAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherFrigoAmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherFrigoAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
