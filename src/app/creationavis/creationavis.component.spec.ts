import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationavisComponent } from './creationavis.component';

describe('CreationavisComponent', () => {
  let component: CreationavisComponent;
  let fixture: ComponentFixture<CreationavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationavisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
