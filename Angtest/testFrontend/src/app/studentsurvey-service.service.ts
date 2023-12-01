import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentsurveyServiceService {

  private baseURL = "http://localhost:8080/api/v1/studentsurvey"
  constructor(private httpClient: HttpClient) { }

  getStudentsurveyList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  createStudentSurvey(student: Student): Observable<Object> {
    return this.httpClient.post(this.baseURL, student);
  }

  getSurveyById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudentSurvey(id: number, student: Student): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudentSurvey(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
