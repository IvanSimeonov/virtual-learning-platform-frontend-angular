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
    this.courseUrl = 'http://localhost:8080/api/v1/';
  }

  public getAll(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.courseUrl + 'courses');
  }

  public getById(id: number): Observable<CourseDTO> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getCourseById.');
    }
    return this.http.get<CourseDTO>(`${this.courseUrl}course/${encodeURIComponent(String(id))}`);
  }
}
