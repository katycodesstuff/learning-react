import React from 'react'
import { ArticleSummary } from '../../models/hashnode'
import BlogSummary from '../BlogSummary/BlogSummary';
import './BlogGrid.css';

interface Props {
    articles: ArticleSummary[];
    setArticle: any
}

function BlogGrid(props: Props): any {
    const { articles, setArticle } = props;

    return (
        <div className='blog-grid'>
            {articles.map((article: ArticleSummary, i: number) => <BlogSummary key={i} article={article} setArticle={setArticle}/>)}
        </div>
    )
}

export default BlogGrid