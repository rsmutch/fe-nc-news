import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';
import Article from './Components/Article';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <Header />
      <Nav username={username} setUsername={setUsername} />
      <Router>
        <ArticleList path="/" setUsername={setUsername} />
        <ArticleList path="/topics/:topic" username={username} />
        <Article path="/articles/:article_id" username={username} />
        <ArticleList path="/articles/authors/:author" username={username} />
        <Login path="/login" setUsername={setUsername} username={username} />
        <Register path="/register" setUsername={setUsername} />
      </Router>
    </div>
  );
};

export default App;
