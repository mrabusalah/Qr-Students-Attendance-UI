import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Article} from '../../classes/Article';
import {ArticleService} from '../../services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'date', 'action'];
  dataSource: MatTableDataSource<Article>;
  articles: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private articleService: ArticleService) {

    this.dataSource = new MatTableDataSource(this.articles);
  }

  ngOnInit(): void {
    this.articleService.listArticles().subscribe(res => {
      this.dataSource = new MatTableDataSource<Article>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteArticle(id: number): void {
    this.articleService.deleteArticleById(id).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Done...',
        text: 'Article deleted successfully!',
      });
      this.ngOnInit();
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'There is an issue with deleting article!',
      });
      console.log(error);
    });
  }
}
