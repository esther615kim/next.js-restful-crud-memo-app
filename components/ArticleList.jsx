import articleStyles from "../styles/Article.module.css";
import React from "react";

export default function ArticleList({ articles }) {
  const newsArticles = articles.response.docs;
  // console.log(newsArticles.map(item => item.headline.main));
  return (
    <div>
      <div className={articleStyles.grid}>
        {newsArticles.map((item) => (
          <div>{item.headline.main}</div>
        ))}
      </div>
    </div>
  );
}
