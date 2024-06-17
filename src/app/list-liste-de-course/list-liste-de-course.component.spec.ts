import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListListeDeCourseComponent } from './list-liste-de-course.component';

describe('ListListeDeCourseComponent', () => {
  let component: ListListeDeCourseComponent;
  let fixture: ComponentFixture<ListListeDeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListListeDeCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListListeDeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
