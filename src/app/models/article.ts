export interface ArticlesResponse{
    count: number;
    next: string | null;
    previous: string | null;
    results: NewsArticle[];
}

export interface NewsArticle {
    id: number;
    title: string;
    url: string;
    image_url: string | null;
    news_site: string;
    summary: string | null;
    published_at: Date;
    updated_at: Date;
    featured: boolean;
    launches: Launch[];
    events: Event[];
}

export interface Launch {
    launch_id: string;
    provider: string;
}

export interface Event {
    event_id: number;
    provider: string;
}
