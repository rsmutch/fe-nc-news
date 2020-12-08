import { getArticles } from './api';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';

const ArticleList = ({ topic }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(topic);
    getArticles(topic).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
      ;
    </div>
  );
};

export default ArticleList;
