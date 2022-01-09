import React, { useEffect, useState } from 'react'
import { Article } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';
import BlogGrid from '../BlogGrid/BlogGrid';
import './MainPage.css'

interface Props {}

function MainPage(props: Props) {
    const {} = props
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const maxNumberOfArticles = 3;

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const result = await client.fetchBlogPosts();
            const articles = result.data.user.publication.posts;
            if (articles.length > maxNumberOfArticles) {
                setArticles(articles.slice(0, maxNumberOfArticles));
            }
            else {
                setArticles(articles);
            }
            setLoading(false);
        }
        func();
    }, []); // [] means only load once on initial page render

    return (
        <div className='main-page'>
            <h2 className='heading'>About the author</h2>
            <p className='text'>Katy is a Principal Software Engineer and Team Lead based in the UK.
                 She primarily works with C#/.NET, Angular and TS. <br />
                 As a developer, her interests lay in how to write readable, testable and reliable code. <br />
                 As a team lead, she is focussing on developing the skills to help her team succeed and thrive.
            </p>
            <p className='text'>You can find Katy on Twitter, GitHub, and Hashnode.</p>
    
            <h2 className='heading'>Latest articles</h2> 
            { loading ? <div className='centered-div loading'>Loading blog posts...</div> : <BlogGrid articles={articles} /> }
        </div>
    )
}

export default MainPage
