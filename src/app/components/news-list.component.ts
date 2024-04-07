import { Component, OnInit } from "@angular/core";
import { ArticleServices } from "../services/articles/articles.service";
import { NewsArticle } from "../models/article";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon"
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'] 
})

export class NewsListComponent implements OnInit{

    articleCount: number = 0;
    articles: NewsArticle[] = [];
    text: string = "edfgdsg";

    constructor(private articleService: ArticleServices){}
    
    ngOnInit(): void {
        this.articleService.getArticles(2).subscribe((articles)=>{
            this.articles = articles.results;
        })
    }

}