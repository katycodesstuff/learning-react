import React from 'react'
import { Article } from '../../models/hashnode'
import './BlogPost.css'

interface Props {
    article: Article
}

function BlogPost(props: Props) {
    const { article } = props

    return (
        <div className='article'>
            <h2 id='article-title'>{article.title}</h2>
            <article dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
    )
}

export default BlogPost
