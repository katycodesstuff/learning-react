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
            {articles.map((article: Article) => <BlogSummary article={article} />)}
        </div>
    )
}

export default BlogGrid