import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../model/courseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl: string;

  constructor(private http: HttpClient) {
    this.courseUrl = 'http://localhost:8080/api/v1/courses';
  }

  public findAll(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.courseUrl);
  }
}
