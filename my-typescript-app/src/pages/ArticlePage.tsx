import React, { useEffect, useState } from 'react'
import BlogPost from '../components/BlogPost/BlogPost'
import MainPage from '../components/MainPage/MainPage';
import { Article as ArticleModel } from '../models/hashnode'
import { HashnodeClient } from '../services/hashnode-client';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';

function ArticlePage() {
    const routeProps = useParams();
    const navigate = useNavigate();
    const [ currentArticle, setCurrentArticle ] = useState<ArticleModel | null>();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function func(): Promise<void> {
            setLoading(true);
            const client = new HashnodeClient();
            if (!routeProps.id) {
                navigate('/page-not-found');
                return;
            }
            const result = await client.fetchBlogPost(routeProps.id);

            if (result === null) {
                navigate('/page-not-found');
                return;
            }
            setCurrentArticle(result);
            setLoading(false);
        }
        func();
    }, [ routeProps.id ]);
    
    return (
        <>
        <Header shadow={true}/>
        {!loading && currentArticle && <BlogPost article={currentArticle} />}
        <MainPage />
        </>
    )
}

export default ArticlePage
