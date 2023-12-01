import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentsurveyServiceService} from "../studentsurvey-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-studentsurvey-create',
  templateUrl: './studentsurvey-create.component.html',
  styleUrl: './studentsurvey-create.component.css'
})
export class StudentsurveyCreateComponent implements OnInit {

  student: Student = new Student();

  constructor(private createSurveyService: StudentsurveyServiceService, private router: Router) { }

  ngOnInit() {
  }

  saveSurvey() {
    this.createSurveyService.createStudentSurvey(this.student).subscribe((data) => {
      console.log(data);
      this.gotoStudentSurveys();
    },
      (error) => console.error("Error storing the survey!", error));
  }

  gotoStudentSurveys() {
    this.router.navigate(['/studentsurvey'])
  }
  onSubmit() {
    console.log(this.student);
    this.saveSurvey();
  }
}
