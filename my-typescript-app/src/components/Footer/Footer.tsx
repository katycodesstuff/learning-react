import { GitHubUrl, HashnodeBaseUrl, TwitterUrl } from '../../external-links'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <span><a href={TwitterUrl()}>Twitter</a></span>
            <span><a href={HashnodeBaseUrl()}>Hashnode</a></span>
            <span><a href={GitHubUrl()}>GitHub</a></span>
            <span>© KatyCodesStuff 2022</span>
        </footer>
    )
}

export default Footer
