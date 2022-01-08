import React, { useEffect, useState } from 'react'
import { Article } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';
import BlogGrid from '../BlogGrid/BlogGrid';

interface Props {}

function MainPage(props: Props) {
    const {} = props
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const result = await client.fetchBlogPosts();
            const articles = result.data.user.publication.posts;
            setArticles(articles);
            setLoading(false);
        }
        func();
    }, []); // [] means only load once on initial page render

    return (
        <div>
            { loading ? "Loading blog posts..." : <BlogGrid articles={articles} /> }
        </div>
    )
}

export default MainPage
