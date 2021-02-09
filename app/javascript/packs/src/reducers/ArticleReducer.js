import { RECEIVE_ARTICLE, REMOVE_ARTICLE } from '../actions/ArticlesAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return action.payload;
    default:
      return oldState;
  }
};
