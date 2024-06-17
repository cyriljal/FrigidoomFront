import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationInformationsComponent } from './modification-informations.component';

describe('ModificationInformationsComponent', () => {
  let component: ModificationInformationsComponent;
  let fixture: ComponentFixture<ModificationInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
