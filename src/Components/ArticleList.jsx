import { getArticles } from './api';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import Sorter from './Sorter';
import Loading from './Loading';

const ArticleList = ({
  topic,
  author,
  username,
  setUsername,
  location: { state }
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    getArticles(topic, author, sortBy, sortOrder).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [topic, author, sortBy, sortOrder, setUsername]);

  if (isLoading) return <Loading />;
  return (
    <div className="article-list">
      <Sorter setSortBy={setSortBy} setSortOrder={setSortOrder} />
      {articles.map((article) => {
        return (
          <ArticleCard
            username={username}
            key={article.article_id}
            {...article}
          />
        );
      })}
      ;
    </div>
  );
};

export default ArticleList;
