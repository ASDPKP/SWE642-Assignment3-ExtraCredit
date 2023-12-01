import { Component, OnInit } from '@angular/core';
import { StudentsurveyServiceService } from "../studentsurvey-service.service";
import { Student } from "../student";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-studentsurvey-update',
  templateUrl: './studentsurvey-update.component.html',
  styleUrl: './studentsurvey-update.component.css'
})
export class StudentsurveyUpdateComponent implements OnInit{

  id: number;
  student: Student = new Student();
  constructor(private studentsurveyService: StudentsurveyServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];
    this.studentsurveyService.getSurveyById(this.id).subscribe(data => {
      console.log(data)
      this.student = data;
    },
      error => {console.error("Error: ", error)});
  }

  onSubmit() {
    this.studentsurveyService.updateStudentSurvey(this.id, this.student).subscribe(data => {
      this.gotoStudentSurveyList();
    },
      (error) => console.log(error));
  }

  gotoStudentSurveyList() {
    this.router.navigate(['/studentsurvey'])
  }
}
