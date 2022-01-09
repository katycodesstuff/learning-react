import React from 'react'
import './LandingPage.css'

interface Props {}

function LandingPage(props: Props) {
    const {} = props

    return (
        <div className='landing-page'>
            <br />
            <br />
            <br />
            <span className='title-underline cursive title'>Welcome stranger!</span>
            <span><br />You've stumbled on my blog. Scroll to see my latest articles.</span>
        </div>
    )
}

export default LandingPage
