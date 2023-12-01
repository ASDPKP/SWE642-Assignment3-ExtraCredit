import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentsurveyServiceService} from "../studentsurvey-service.service";
import {Student} from "../student";

@Component({
  selector: 'app-studentsurvey-read',
  templateUrl: './studentsurvey-read.component.html',
  styleUrl: './studentsurvey-read.component.css'
})
export class StudentsurveyReadComponent implements OnInit{

  id: number;
  student: Student

  constructor(private studentsurveyService: StudentsurveyServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
    this.studentsurveyService.getSurveyById(this.id).subscribe(data => {
      this.student = data;
    })
  }
}
