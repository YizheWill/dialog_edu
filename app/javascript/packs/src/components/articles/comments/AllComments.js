import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { Typography, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { actionFetchComments } from '../../../actions/CommentsAction';
const Item = ({ comment }) => {
  const history = useHistory();
  return (
    <div
      style={{
        width: 500,
        padding: 30,
        borderRadius: 20,
        boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.1)',
        margin: '30px 0',
        position: 'relative',
      }}
      onClick={() => history.push('/comments/' + comment.id)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '1.5rem',
        }}
      >
        <Avatar style={{ marginRight: 15 }}>
          {comment.commenter.username
            .split(' ')
            .map((e) => e[0].toUpperCase())
            .join('')
            .slice(0, 1)}
        </Avatar>
        <Typography
          style={{
            fontSize: 15,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 100,
          }}
        >
          {comment?.commenter?.username}
        </Typography>
      </div>
      <Typography
        style={{
          marginTop: '0.5rem',
          fontSize: 15,
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 800,
        }}
      >
        {comment?.content}
      </Typography>
      <Typography
        style={{
          fontSize: 13,
          width: '100%',
          textAlign: 'end',
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 100,
          marginTop: '0.5rem',
        }}
      >
        {comment?.createdAt.slice(0, 10)}
      </Typography>
      <div
        style={{
          position: 'absolute',
          right: 20,
          top: 20,
          color: 'darkblue',
          cursor: 'pointer',
          fontSize: 20,
        }}
        onClickCapture={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          history.push('/articles/' + comment.article.id);
        }}
      >
        <span style={{ fontWeight: 800, color: 'black' }}>Commented On: </span>
        {comment?.article?.title || 'hey'}
      </div>
    </div>
  );
};
const List = ({ comments }) => (
  <div>
    <Typography
      variant='h3'
      style={{
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 800,
        marginTop: 100,
        marginLeft: 100,
      }}
    >
      All Comments
    </Typography>

    <div style={{ marginLeft: 100 }}>
      {Object.values(comments)
        ?.reverse()
        .map((comment, idx) => {
          return <Item key={idx} comment={comment} />;
        })}
    </div>
  </div>
);
function AllComments({ comments, getAllComments }) {
  useEffect(() => {
    getAllComments();
  }, []);
  return (
    <div>
      <Navbar />
      <List comments={comments} />
    </div>
  );
}

export default connect(
  (state) => ({ comments: state.entities.comments }),
  (dispatch) => ({ getAllComments: () => dispatch(actionFetchComments()) })
)(AllComments);
