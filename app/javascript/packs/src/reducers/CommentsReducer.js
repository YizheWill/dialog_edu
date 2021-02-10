import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/CommentsAction';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload;
    case RECEIVE_COMMENT:
      return {
        ...oldState,
        [action.payload.comment.id]: action.payload.comment,
      };
    case REMOVE_COMMENT:
      const newState = { ...oldState };
      delete newState[action.payload];
      return newState;
    default:
      return oldState;
  }
};
