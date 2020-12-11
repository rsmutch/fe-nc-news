import { getArticles } from './api';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import Sorter from './Sorter';

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
    // if (state.username) {
    //   console.log('test');
    //   setUsername(state.username);
    // }
  }, [topic, author, sortBy, sortOrder, setUsername]);

  if (isLoading) return <p>Loading...</p>;
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
