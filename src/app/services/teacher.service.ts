import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../classes/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080/api/v1/teacher';
  private integration = 'http://localhost:8080/api/v1/integration';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + `/login/${username}/${password}`, null);
  }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  loggedIn() {
    return (localStorage.getItem('user_type') == 'teacher');
  }

  getCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`);
  }

  deleteTeacherById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  insertTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(`${this.baseUrl}`, teacher);
  }

  getTeacherByUsername(username: string) {
    return this.http.get(`${this.baseUrl}/username/${username}`);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put(`${this.baseUrl}`, teacher);
  }

  getCourses(id: string): Observable<any> {
    return this.http.get(`${this.integration}/course-teacher/courses/${id}`);
  }

  addCourseToTeacher(courseId: string, teacherId: string): Observable<any> {
    return this.http.post(`${this.integration}/course-teacher`, {'courseId': courseId, 'teacherId': teacherId});
  }
}
