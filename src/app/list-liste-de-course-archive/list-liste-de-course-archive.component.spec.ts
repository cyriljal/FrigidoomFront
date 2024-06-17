import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListListeDeCourseArchiveComponent } from './list-liste-de-course-archive.component';

describe('ListListeDeCourseArchiveComponent', () => {
  let component: ListListeDeCourseArchiveComponent;
  let fixture: ComponentFixture<ListListeDeCourseArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListListeDeCourseArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListListeDeCourseArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
