import { combineReducers } from 'redux';
import articles from './ArticlesReducer';
import article from './ArticleReducer';

export default combineReducers({
  articles,
  article,
});
