import  { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsurveyListComponent } from './studentsurvey-list/studentsurvey-list.component';
import { StudentsurveyCreateComponent } from './studentsurvey-create/studentsurvey-create.component';
import {FormsModule} from "@angular/forms";
import { StudentsurveyUpdateComponent } from './studentsurvey-update/studentsurvey-update.component';
import { StudentsurveyReadComponent } from './studentsurvey-read/studentsurvey-read.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsurveyListComponent,
    StudentsurveyCreateComponent,
    StudentsurveyUpdateComponent,
    StudentsurveyReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
