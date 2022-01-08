export interface Article {
    title: string;
    brief: string;
    slug: string;
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