import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsurveyReadComponent } from './studentsurvey-read.component';

describe('StudentsurveyReadComponent', () => {
  let component: StudentsurveyReadComponent;
  let fixture: ComponentFixture<StudentsurveyReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsurveyReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsurveyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
