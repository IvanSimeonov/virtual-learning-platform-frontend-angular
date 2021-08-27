import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/api/api/course.service';
import { CourseDTO } from 'src/api/model/courseDTO';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: CourseDTO[] | undefined;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().subscribe(data => {
      this.courses = data;
    })
  }

}
