import React, { useEffect, useState } from 'react'
import { Article, ArticleSummary } from '../../models/hashnode';
import { HashnodeClient } from '../../services/hashnode-client';
import BlogGrid from '../BlogGrid/BlogGrid';
import BlogPost from '../BlogPost/BlogPost';
import './MainPage.css'

interface Props {
    article: ArticleSummary | null;
    setArticle: any;
}

function MainPage(props: Props) {
    const { article, setArticle } = props;
    const [articles, setArticles] = useState<ArticleSummary[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [ currentArticle, setCurrentArticle ] = useState<Article | null>(null);

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

    useEffect(() => {
        async function func(): Promise<void> {
            const client = new HashnodeClient();
            const result = await client.fetchBlogPost(article!.slug);
            setCurrentArticle(result);
        }
        if (article != null) {
            func();
        }
    }, [ article ]); // trigger every time state changes

    return (
        <div className='main-page'>
            {
                currentArticle &&
                <BlogPost article={currentArticle} />
            }
            <h2 className='heading'>About the author</h2>
            <p className='text'>Katy is a Principal Software Engineer and Team Lead based in the UK.
                 She primarily works with C#/.NET, Angular and TS. <br />
                 As a developer, her interests lay in how to write readable, testable and reliable code. <br />
                 As a team lead, she is focussing on developing the skills to help her team succeed and thrive.
            </p>
            <p className='text'>You can find Katy on Twitter, GitHub, and Hashnode.</p>
    
            <h2 className='heading'>Latest articles</h2> 
            { loading ? <div className='centered-div loading'>Loading blog posts...</div> : <BlogGrid articles={articles} setArticle={setArticle} /> }
        </div>
    )
}

export default MainPage
