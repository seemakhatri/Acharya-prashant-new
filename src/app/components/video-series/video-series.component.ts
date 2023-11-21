import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-video-series',
  templateUrl: './video-series.component.html',
  styleUrls: ['./video-series.component.css']
})
export class VideoSeriesComponent implements OnInit {
  seriesData: any[] = [];

  constructor(private http: HttpClient, public courseService: CourseServiceService) { }

  ngOnInit(): void {
    this.http.get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
      .subscribe((data: any) => {
        this.seriesData = data.relatedContent;
      });
  }
}
