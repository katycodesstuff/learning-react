import moment from "moment";
import { HashnodeArticleUrl } from "../../external-links";
import { Article } from "../../models/hashnode"
import './BlogPostInfo.css';

interface Props {
    article: Article;
}

function BlogPostInfo(props: Props) {
    const { article } = props

    const added = moment(article.dateAdded);
    const updated = moment(article.dateUpdated ?? article.dateAdded);
    return (
    <>
        <div className='tags section-border'>
            {article.tags.map((t, i) => <span className='tag' key={i}>{t.name}</span>)}
        </div>
        <div className='article-details section-border'>
            <div className='article-item'><a href={HashnodeArticleUrl(article.slug)} >{article.totalReactions} reactions ❤</a></div>
            <div className='article-item'>Written {added.toString()}</div>
            <div className='article-item'>Last updated {updated.toString()}</div>
            {article.isFeatured && <div><i>This article was featured on Hashnode! 🏆</i></div>}
        </div>
    </>
    )
}

export default BlogPostInfo
