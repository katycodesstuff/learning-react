import React from 'react'
import './Header.css'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <header>
            <h1 id='header'>KatyCodesStuff<span className='light-text'>Blog</span></h1>
        </header>
    )
}

export default Header
