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
        setScrolledFromWindow(setScrolled);
        window.onscroll = () => { setScrolledFromWindow(setScrolled); }

        // returning a function cleans up during component dismount
        return () => { window.onscroll = null; };
    }, [ ]);

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

function setScrolledFromWindow(setScrolled: (value: boolean) => void) {
    setScrolled(window.scrollY >= 100);
}

export default Header
