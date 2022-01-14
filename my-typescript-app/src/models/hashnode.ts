export interface ArticleSummary {
    title: string;
    brief: string;
    slug: string;
    totalReactions: number;
    dateAdded: Date;
}

export interface Article {
    title: string;
    brief: string;
    slug: string;
    totalReactions: number;
    dateAdded: Date;
    _id: string;
    isFeatured: boolean;
    content: string;
    coverImage: string;
    tags: [
        {
             name: string
        }
    ]
}

export interface HashnodeResponse {
    data: {
        user: {
            publication: {
                posts: ArticleSummary[]
            }
        }
    }
}