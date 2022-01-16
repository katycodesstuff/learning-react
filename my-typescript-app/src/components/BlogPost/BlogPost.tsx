import { Article } from '../../models/hashnode'
import BlogPostInfo from '../BlogPostInfo/BlogPostInfo';
import './BlogPost.css'

interface Props {
    article: Article
}

function BlogPost(props: Props) {
    const { article } = props;
    let html = article.content;
    if (containsMaliciousCode(html)) {
        html = "Unable to display article";
    }
    
    return (
        <>
        <div className='section-border'>
            <div className='article'>
                <h1 id='article-title'>{article.title}</h1>
                <BlogPostInfo article={article}/>
                {article.isFeatured && <span><i>This article was featured on Hashnode!</i></span>}
                <article dangerouslySetInnerHTML={{ __html: removeClasses(html) }} />
            </div>
        </div>
        </>
    )
}

function containsMaliciousCode(html: string) {
    if (html.indexOf("<script>") > -1) {
        return true;
    }
    return false;
}

function removeClasses(html: string): string {
    const words = html.split(' ');
    const filteredWords: string[] = [];

    for (let word of words) {
        if (word.startsWith("class=")){
            let brokenDownWord = word.split('"');
            const [, , ...rest] = brokenDownWord;
            let wordWithoutClass = rest.join('"');
            filteredWords.push(wordWithoutClass);
        }
        else {
            filteredWords.push(word);
        }
    }
    return filteredWords.join(' ');
}

export default BlogPost
