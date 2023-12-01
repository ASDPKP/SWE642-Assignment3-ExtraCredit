import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsurveyListComponent} from "./studentsurvey-list/studentsurvey-list.component";
import {StudentsurveyCreateComponent} from "./studentsurvey-create/studentsurvey-create.component";
import {StudentsurveyUpdateComponent} from "./studentsurvey-update/studentsurvey-update.component";
import {StudentsurveyReadComponent} from "./studentsurvey-read/studentsurvey-read.component";

const routes: Routes = [
  {path: 'studentsurvey', component: StudentsurveyListComponent},
  {path: 'create-student-survey', component: StudentsurveyCreateComponent},
  {path: 'update-student-survey/:id', component: StudentsurveyUpdateComponent},
  {path: 'student-survey-info/:id', component: StudentsurveyReadComponent},
  {path: '', redirectTo: 'studentsurvey', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
