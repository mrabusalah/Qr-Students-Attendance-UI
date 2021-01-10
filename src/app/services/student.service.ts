import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Student} from '../classes/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/v1/student';
  private integration = 'http://localhost:8080/api/v1/integration';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa('app:passApp')
      })
    };
    return this.http.post(`http://localhost:8080/oauth/token?grant_type=password&username=${username}&password=${password}`,
      {},
      headers);
  }

  loggedIn() {
    return !!localStorage.getItem('access_token');
  }

  getCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`);
  }

  listStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteStudentById(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  insertStudent(student: Student): Observable<any> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  getStudentByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/username/${username}`);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(`${this.baseUrl}`, student);
  }

  getStudentsByCourseId(courseId: number): Observable<any> {
    return this.http.get(`${this.integration}/course-student/students/${courseId}`);
  }

  addCourseToStudent(courseId: string, studentUsername: string) {
    return this.http.post(`${this.integration}/course-student`, {"courseId" : courseId , "studentId" : studentUsername});
  }
}
