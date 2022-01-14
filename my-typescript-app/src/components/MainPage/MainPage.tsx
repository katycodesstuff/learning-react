import React, { useEffect, useState } from 'react'
import { ArticleSummary } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';
import BlogGrid from '../BlogGrid/BlogGrid';
import './MainPage.css'

interface Props {
}

function MainPage(props: Props) {
    const { } = props;
    const [articles, setArticles] = useState<ArticleSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const result = await client.fetchBlogPosts(); 
            const articles = result;
            setArticles(articles);
            setLoading(false);
        }
        func();
    }, []); // [] means only load once on initial page render

    return (
        <>
            <div className='main-page'>
            <h2 className='heading'>About the author</h2>
            <p className='text'>Katy is a Lead Software Engineer based in the UK.
                 She primarily works with C#/.NET, Angular and TS.<br />
                 As a developer, her interests lay in how to write readable, testable and reliable code.<br />
                 As a team lead, she is focussing on developing the leadership skills to help her team succeed and thrive.
            </p>
            <p className='text'>You can find Katy on Twitter, GitHub, and Hashnode.</p>
    
            <h2 className='heading'>Latest articles</h2> 
        </div>
        { loading 
            ? <div className='centered-div loading'>Loading blog posts...</div> 
            : <BlogGrid articles={articles} /> }
        </>
    )
}

export default MainPage
