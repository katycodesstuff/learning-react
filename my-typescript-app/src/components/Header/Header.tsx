import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RandomArticle } from '../../services/RandomArticle';
import './Header.css'

interface Props {
    shadow: boolean;
}

function Header(props: Props) {
    const { shadow } = props
    const [scrolled, setScrolled] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.onscroll) {
            window.onscroll = () => { setScrolledFromWindow(scrolled, setScrolled); }
        }

        // returning a function cleans up during component dismount
        return () => { window.onscroll = null; };
    }, [ scrolled ]);

    const showShadow = shadow ? 'shadow' : '';
    const headerClass = scrolled ? 'scrolled' : showShadow;
    const logoLightTextClass = scrolled ? '' : 'light-text';
    const logoClass = scrolled ? 'logo scrolled-logo' : 'logo';

    return (
        <header className={headerClass}>
            <Link className={logoClass} to='/'>KatyCodesStuff<span className={logoLightTextClass}>Blog</span></Link>
            <button onClick={async (event) => {
                const randomArticle = await new RandomArticle().getRandomArticle();
                navigate(`/article/${randomArticle.slug}`)
            }}>Go to random article</button>
        </header>
    )
}

function setScrolledFromWindow(scrolled: boolean, setScrolled: (value: boolean) => void) {
    const scrollPx = 100;
    if (window.scrollY >= scrollPx && scrolled === false) {
        setScrolled(true);
    }
    else if (window.scrollY < scrollPx && scrolled === true) {
        setScrolled(false);
    }
}

export default Header
