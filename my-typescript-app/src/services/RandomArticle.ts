import { ArticleSummary } from "../models/hashnode";
import { HashnodeClient } from "./hashnode-client";

export class RandomArticle {

    public async getRandomArticle(): Promise<ArticleSummary> {
        const client = new HashnodeClient();
        const result = await client.fetchBlogPosts();
        const randomNum = Math.random();
        let randomIndex = Math.floor(randomNum * result.length);

        return result[randomIndex];
    }
}