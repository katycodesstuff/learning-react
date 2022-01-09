import React, { useState } from 'react'
import { ArticleSummary } from '../../models/hashnode';
import { RandomArticle } from '../../services/RandomArticle'
import './Header.css'

interface Props {
    randomArticleOnClick: any;
}

function Header(props: Props) {
    const { randomArticleOnClick } = props

    return (
        <header>
            <h1 id='header'>KatyCodesStuff<span className='light-text'>Blog</span></h1>
            <button onClick={randomArticleOnClick}>Go to random article</button>
        </header>
    )
}

export default Header
