import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private apiUrl = 'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3';
  public imagePath = 'https://cimg.acharyaprashant.org/';
  private CourseUrl = 'https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english';



  constructor(private http: HttpClient) { }


  getCourseData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFaqData(): Observable<any[]> {
    return this.http.get<any[]>(this.CourseUrl);
  }
}
