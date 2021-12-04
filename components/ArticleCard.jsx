import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

function ArticleCard({ article }) { //map에서 돌린 거 1개만 가져옴!
    return (
        <Link href="/article/[id]"
            as={'/article/${article.id}'}>
            <a className={articleStyles.card}></a>
        </Link>
    )
}

export default ArticleCard


