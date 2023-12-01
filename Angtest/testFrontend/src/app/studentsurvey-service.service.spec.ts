import { TestBed } from '@angular/core/testing';

import { StudentsurveyServiceService } from './studentsurvey-service.service';

describe('StudentsurveyServiceService', () => {
  let service: StudentsurveyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsurveyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
