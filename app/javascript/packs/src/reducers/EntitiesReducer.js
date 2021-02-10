import { combineReducers } from 'redux';
import articles from './ArticlesReducer';
import article from './ArticleReducer';
import comments from './CommentsReducer';
import comment from './CommentReducer';

export default combineReducers({
  articles,
  article,
  comments,
  comment,
});
