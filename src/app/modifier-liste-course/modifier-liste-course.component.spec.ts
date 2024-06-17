import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierListeCourseComponent } from './modifier-liste-course.component';

describe('ModifierListeCourseComponent', () => {
  let component: ModifierListeCourseComponent;
  let fixture: ComponentFixture<ModifierListeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierListeCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierListeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
