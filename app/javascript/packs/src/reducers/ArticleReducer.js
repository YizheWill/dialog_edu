import { RECEIVE_ARTICLE, REMOVE_ARTICLE } from '../actions/ArticlesAction';
import { RECEIVE_COMMENTS } from '../actions/CommentsAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return action.payload;
    case RECEIVE_COMMENTS:
      const newState = { ...oldState };
      return newState;

    default:
      return oldState;
  }
};
