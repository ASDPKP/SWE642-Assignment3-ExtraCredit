import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsurveyListComponent } from './studentsurvey-list.component';

describe('StudentsurveyListComponent', () => {
  let component: StudentsurveyListComponent;
  let fixture: ComponentFixture<StudentsurveyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsurveyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
