import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsurveyUpdateComponent } from './studentsurvey-update.component';

describe('StudentsurveyUpdateComponent', () => {
  let component: StudentsurveyUpdateComponent;
  let fixture: ComponentFixture<StudentsurveyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentsurveyUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsurveyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
