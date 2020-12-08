import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://rsm-nc-news.herokuapp.com/api'
});

export const getTopics = () => {
  return ncNewsApi.get('/topics').then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic) => {
  return ncNewsApi
    .get('/articles', { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};
