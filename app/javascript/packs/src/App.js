import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ArticleShow from './components/articles/ArticleShow';
import NewArticle from './components/articles/NewArticle';
import Drawer from './components/articles/comments/Comment';
import AllComments from './components/articles/comments/AllComments';
import EditArticle from './components/articles/EditArticle';
import CommentItem from './components/articles/comments/CommentItem';
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
          <Route exact path='/drawer'>
            <Drawer />
          </Route>
          <Route exact path='/comments'>
            <AllComments />
          </Route>
          <Route exact path='/editarticle/:articleId'>
            <EditArticle />
          </Route>
          <Route exact path='/comments/:commentId'>
            <CommentItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
