import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Article} from '../classes/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8080/api/v1/article';


  constructor(private http: HttpClient, private router: Router) {
  }

  listArticles(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getArticleById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  insertArticle(article: Article): Observable<any> {
    return this.http.post(`${this.baseUrl}`, article);
  }

  removeArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteArticleById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
