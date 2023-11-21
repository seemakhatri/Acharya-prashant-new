import { Component, Input } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() courseData: any;

  constructor(private courseService: CourseServiceService) {}

  ngOnInit() {
    this.courseService.getCourseData().subscribe(data => {
      this.courseData = data;
    });
  }
}
