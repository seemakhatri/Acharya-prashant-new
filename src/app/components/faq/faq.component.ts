import { Component } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqData: any[] = [];

  constructor(private courseService: CourseServiceService) { }

  ngOnInit(): void {
    this.courseService.getFaqData().subscribe(data => {
      this.faqData = data;
    });
  }
}
