import React, { useEffect, useState } from 'react'
import BlogPost from '../components/BlogPost/BlogPost'
import MainPage from '../components/MainPage/MainPage';
import { Article as ArticleModel } from '../models/hashnode'
import { HashnodeClient } from '../services/hashnode-client';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';

function Article() {
    const routeProps = useParams();
    const [ currentArticle, setCurrentArticle ] = useState<ArticleModel>();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function func(): Promise<void> {
            setLoading(true);
            const client = new HashnodeClient();
            if (routeProps.id === undefined) {
                console.error(`Article doesn't exist for id: ${routeProps.id}`)
                return;
            }
            const result = await client.fetchBlogPost(routeProps.id);
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

export default Article
