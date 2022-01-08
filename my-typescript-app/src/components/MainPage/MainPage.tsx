import React, { useEffect, useState } from 'react'
import { Article } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';

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

    let render = [];
    if (articles) {
        for (let article of articles) {
            const { title, brief, slug } = article;
            const link = `https://katycodesstuff.hashnode.dev/${slug}`;
            render.push(<li><a href={link}><em>{title}</em></a> <p>{brief}</p></li>);
        }
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Yada yada yada</p>
            { loading ? "Loading blog posts..." : <ul>{render}</ul>}
        </div>
    )
}

export default MainPage
