import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAmiComponent } from './ajout-ami.component';

describe('AjoutAmiComponent', () => {
  let component: AjoutAmiComponent;
  let fixture: ComponentFixture<AjoutAmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
