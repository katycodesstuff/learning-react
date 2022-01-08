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
            <a href={link}><h1>{title}</h1></a>
            <p>{summary}</p>
        </div>
    )
}

export default BlogSummary
