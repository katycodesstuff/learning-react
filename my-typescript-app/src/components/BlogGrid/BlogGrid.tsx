import React from 'react'
import { Article } from '../../models/hashnode'
import BlogSummary from '../BlogSummary/BlogSummary';
import './BlogGrid.css';

interface Props {
    articles: Article[];
}

function BlogGrid(props: Props): any {
    const { articles } = props;

    return (
        <div className='blog-grid'>
            {articles.map((article: Article) => <BlogSummary title={article.title} summary={article.brief} link={getLink(article.slug)} />)}
        </div>
    )
}

function getLink(resource: string) : string {
    return `https://katycodesstuff.hashnode.dev/${resource}`
}

export default BlogGrid
