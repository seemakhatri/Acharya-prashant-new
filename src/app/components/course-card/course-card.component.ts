import { Component, Input, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  courseSeriesData: any;
  @Input() course: any;

  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
    this.getCourseSeriesData();
  }

  getCourseSeriesData(): void {
    this.courseService.getCourseData().subscribe(data => {
      this.courseSeriesData = data;
    });
  }

}
