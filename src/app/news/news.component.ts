import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
sources: Array<any>;
articles: Array<any>;
  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.initArticle().subscribe(
      data => {
        this.articles = data['articles'];
      }
    )
    this.service.initSource().subscribe(
      data => {this.sources = data['sources']}
    )
  }
 getArticlesBySource(source){
   this.service.getArticles(source).subscribe(
     data => {this.articles=data['articles']}
   )
 }
 
}
