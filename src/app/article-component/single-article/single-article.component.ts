import {Component, OnInit} from '@angular/core';
import {Article} from '../../classes/Article';
import {ArticleService} from '../../services/article.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  article: Article;
  id: number;
  exist: boolean;

  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.exist = true;
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.articleService.getArticleById(this.id)
        .subscribe(res => {
          this.article = res;
        }, error => {
          this.exist = false;
          console.log(error);
        });
    });
  }
}
