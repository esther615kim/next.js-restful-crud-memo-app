import Head from "next/head";
import React from "react";
import ArticleList from "../components/ArticleList";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home({ articles }) {
  console.log(articles.response.docs);

  return (
    <div className={styles.container}>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const API_KEYS = "FqxBOwJOOqWxGn6UZgQBo3AhHG9YzLqj";
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=$everything&api-key=${API_KEYS}`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
