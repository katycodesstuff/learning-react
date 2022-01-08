export class HashnodeClient {

    public query = `
    query GetUserArticles($page: Int!) {
        user(username: "katycodesstuff") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }`
    public async fetchBlogPosts(): Promise<any> {
        return await this.gql(this.query, {page: 0});
    }

    private async gql(query: any, variables={}) {
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