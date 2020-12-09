import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';
import Article from './Components/Article';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
        <Article path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
