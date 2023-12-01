import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsurveyCreateComponent } from './studentsurvey-create.component';

describe('StudentsurveyCreateComponent', () => {
  let component: StudentsurveyCreateComponent;
  let fixture: ComponentFixture<StudentsurveyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsurveyCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsurveyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
