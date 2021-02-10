import { combineReducers } from 'redux';
import articles from './ArticlesReducer';
import article from './ArticleReducer';
import comments from './CommentsReducer';

export default combineReducers({
  articles,
  article,
  comments,
});
