import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../classes/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    this.reload();
  }

  private reload() {
    this.articleService.listArticles().subscribe(res => {
      this.articles = res;
    }, error => console.log(error));
  }

  goToHome() {
    if (!localStorage.getItem('username')) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home', localStorage.getItem('user_type')]);
    }
  }
}
