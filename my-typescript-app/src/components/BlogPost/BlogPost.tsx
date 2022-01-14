import moment from 'moment';
import { Article } from '../../models/hashnode'
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
    const date = moment(article.dateAdded);
    return (
        <>
         {/* <div className='article-details'>
                <span>❤{article.totalReactions}</span>
                <span>Tagged: {article.tags.map(t => t.name).join(', ')}</span>
                <span>Written {date.date()}/{date.month()}/{date.year()}</span>
                </div> */}
        <div className='article'>
            <h1 id='article-title'>{article.title}</h1>
            {article.isFeatured && <span><i>This article was featured on Hashnode!</i></span>}
            <article dangerouslySetInnerHTML={{ __html: removeClasses(html) }} />
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
