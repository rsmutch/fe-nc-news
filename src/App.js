import './App.css';
import Header from './Components/Header';
import { Router } from '@reach/router';
import Nav from './Components/Nav';
import ArticleList from './Components/ArticleList';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic" />
      </Router>
    </div>
  );
}

export default App;
