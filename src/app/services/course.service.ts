import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../classes/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/api/v1/course';
  private integration = 'http://localhost:8080/api/v1/integration';

  constructor(private http: HttpClient) {
  }

  getCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`);
  }

  insertCourse(course: Course): Observable<any> {
    return this.http.post(`${this.baseUrl}`, course);
  }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteCourseById(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCourseById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCourse(course: Course): Observable<any> {
    return this.http.put(`${this.baseUrl}`, course);
  }
}
