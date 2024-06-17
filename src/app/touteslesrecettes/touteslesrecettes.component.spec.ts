import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouteslesrecettesComponent } from './touteslesrecettes.component';

describe('TouteslesrecettesComponent', () => {
  let component: TouteslesrecettesComponent;
  let fixture: ComponentFixture<TouteslesrecettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouteslesrecettesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouteslesrecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
