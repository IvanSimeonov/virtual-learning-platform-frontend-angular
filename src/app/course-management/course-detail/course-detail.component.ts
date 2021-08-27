import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/api/api/course.service';
import { CourseDTO } from 'src/api/model/courseDTO';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: CourseDTO | undefined;
  
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseService.getById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.course = data;
    });
  }
}
