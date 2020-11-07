import {Component, OnInit} from '@angular/core';
import {Article} from '../../classes/Article';
import {ArticleService} from '../../services/article.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit(){
    this.article = new Article();
  }

  save() {
    this.articleService.insertArticle(this.article)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Done...',
          text: 'Article added successfully!',
        });
        this.back();
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Opps...',
          text: 'There is an issue with creating article!',
        });
        console.log(error);
      });
    this.article = new Article();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  back() {
    this.router.navigate(['/articles']);
  }
}
