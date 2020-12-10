import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://rsm-nc-news.herokuapp.com/api'
});

export const getTopics = () => {
  return ncNewsApi.get('/topics').then(({ data: { topics } }) => {
    return topics;
  });
};

export const getArticles = (topic, author, sortBy, sortOrder) => {
  return ncNewsApi
    .get('/articles', {
      params: { topic, author, sort_by: sortBy, order: sortOrder }
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const patchCommentVotes = (comment_id, inc_votes) => {
  return ncNewsApi
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getComments = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, body, username) => {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`);
};

export const postNewUser = (username) => {
  return ncNewsApi.post(`/users`, { username }).then(({ data: { user } }) => {
    return user;
  });
};

export const getAllUsers = () => {
  return ncNewsApi.get('/users').then(({ data: { users } }) => {
    return users;
  });
};
