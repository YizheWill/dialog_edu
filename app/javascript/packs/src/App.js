import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ArticleShow from './components/articles/ArticleShow';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/articles/:articleId'>
          <ArticleShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
