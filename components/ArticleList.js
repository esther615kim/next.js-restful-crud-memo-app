
import articleStyles from '../styles/Article.module.css';

export default function ArticleList({ articles }) {
    const newsArticles = articles.response.docs;
    // console.log(newsArticles.map(item => item.headline.main));
    return (
        <div >
            <div className={articleStyles.grid}>{newsArticles.map(item => <div className={articleStyles.card}>{item.headline.main}</div>)}</div>
        </div >
    )
}
