import { Component, OnInit } from "@angular/core";
import { ArticleServices } from "../services/articles/articles.service";

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss'] 
})

export class NewsListComponent implements OnInit{

    articleCount: number = 0;

    constructor(private articleService: ArticleServices){}
    
    ngOnInit(): void {
        this.articleService.getArticles(2).subscribe((articles)=>{
            this.articleService.getArticle(articles?.results[0]?.id).subscribe((article)=>{
                console.log(article);
            })
        })

        
    }
}