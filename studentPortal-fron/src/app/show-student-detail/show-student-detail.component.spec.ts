import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentDetailComponent } from './show-student-detail.component';

describe('ShowStudentDetailComponent', () => {
  let component: ShowStudentDetailComponent;
  let fixture: ComponentFixture<ShowStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
