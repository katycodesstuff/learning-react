import React from 'react'
import './BlogSummary.css'

interface Props {
    title: string;
    summary: string;
    link: string;
}

function BlogSummary(props: Props) {
    const { title, summary, link } = props;

    return (
        <div className='box'>
            <h2>{title}</h2>
            <p>{summary}</p>
            <a href={link}>Go to Hashnode article ➡</a>
        </div>
    )
}

export default BlogSummary
