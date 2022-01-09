export interface Article {
    title: string;
    brief: string;
    slug: string;
    totalReactions: number;
    dateAdded: Date;
}

export interface HashnodeResponse {
    data: {
        user: {
            publication: {
                posts: Article[]
            }
        }
    }
}