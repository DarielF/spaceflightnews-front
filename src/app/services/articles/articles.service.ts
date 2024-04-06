import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ArticlesResponse, NewsArticle } from "src/app/models/article";
import { ConstService } from "../consts/const.service";

@Injectable()

export class ArticleServices {

    constructor(private http: HttpClient) { }

    /**
     * @param {number} - Number of articles to retrive, 10 articles by default
     */
    public getArticles(limit: number = 10): Observable<ArticlesResponse> {

        let params = new HttpParams().set("limit", limit);
        let result = this.http.get<ArticlesResponse>(ConstService.baseURL + 'v4/articles', { params: params });

        return result;
    }

    /**
     * 
     * @param {number} articleID - ID of the article
     */
    public getArticle(articleID: number): Observable<NewsArticle> {
        return this.http.get<NewsArticle>(ConstService.baseURL + `v4/articles/${articleID}`);
    }
}