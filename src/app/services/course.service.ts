import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/api/v1/course';

  constructor(private http: HttpClient) {
  }

  getCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`);
  }
}
