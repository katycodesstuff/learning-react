import moment from 'moment';
import React from 'react'
import { Article } from '../../models/hashnode';
import './BlogSummary.css'

interface Props {
   article: Article
}

function BlogSummary(props: Props) {
    const { title, brief, slug, dateAdded, totalReactions } = props.article;

    return (
        <div className='box'>
            <h2>{title}</h2>
            <p>{brief}</p>

            <div className='info-grid small-text'>
                <span className='info-item'>❤ {totalReactions}</span>
                <span className='info-item'>{moment(dateAdded.toString(), 'YYYY-MM-DDTHH:mm:ss.fffZ').fromNow()}</span>
                <span><a href={getLink(slug)}>Go to Hashnode article ➡</a></span>
            </div>
        </div>
    )
}

function getLink(resource: string) : string {
    return `https://katycodesstuff.hashnode.dev/${resource}`
}

export default BlogSummary
