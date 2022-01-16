import { Article, ArticleSummary, HashnodeResponse } from "../models/hashnode";

export class HashnodeClient {

    public async fetchBlogPosts(): Promise<ArticleSummary[]> {
        let allBlogsFetched = false;
        let articles: ArticleSummary[] = [];
        let page = 0;
        const query = `
        query GetUserArticles($page: Int!) {
            user(username: "katycodesstuff") {
                publication {
                    posts(page: $page) {
                        title
                        brief
                        slug
                        totalReactions
                        dateAdded
                    }
                }
            }
        }`;
        while (!allBlogsFetched) {
            let response: HashnodeResponse = await this.makeGqlRequest(query, { page: page });
            articles.push(...response.data.user.publication.posts);
            if (response.data.user.publication.posts.length === 0) {
                allBlogsFetched = true;
            }
            page++;
        }
        return articles;
    }

    public async fetchBlogPost(slug: string): Promise<Article | null> {
        const query = `
        query {
            post(slug: "${slug}"
                 hostname: "katycodesstuff.hashnode.dev") {
                _id
                title
                slug
                dateAdded
                dateUpdated
                isFeatured
                content
                coverImage
                totalReactions
                tags {
                name
                }
            }
        }`;
        const response = await this.makeGqlRequest(query);
        return response.data.post;
    }

    private async makeGqlRequest(query: string, variables = {}): Promise<any> {
        const data = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
    
        return data.json();
    }
}