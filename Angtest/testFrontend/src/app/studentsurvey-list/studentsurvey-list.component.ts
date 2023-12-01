import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { StudentsurveyServiceService } from "../studentsurvey-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-studentsurvey-list',
  templateUrl: './studentsurvey-list.component.html',
  styleUrl: './studentsurvey-list.component.css'
})
export class StudentsurveyListComponent implements OnInit{

  students: Student[] = [];

  constructor(private surveyService: StudentsurveyServiceService, private router: Router) {}

  ngOnInit() {
    this.getAllSurveys();
  }

  private getAllSurveys() {
    this.surveyService.getStudentsurveyList().subscribe((data) => {
      this.students = data;
    },
      (error) => {
        console.error('Error fetching data: ', error);
      });
  }

  updateStudentSurvey(id: number) {
    this.router.navigate(['update-student-survey', id]);
  }

  deleteStudentSurvey(id: number) {
    this.surveyService.deleteStudentSurvey(id).subscribe(data => {
      this.getAllSurveys();
    })
  }

  viewStudentSurvey(id: number) {
    this.router.navigate(['student-survey-info', id]);
  }
}
