import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ArticleShow from './components/articles/ArticleShow';
import NewArticle from './components/articles/NewArticle';
import './App.css';

function App() {
  return (
    <div id='entry'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/article/new'>
            <NewArticle />
          </Route>
          <Route exact path='/articles/:articleId'>
            <ArticleShow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
