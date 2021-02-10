import React, { useEffect } from 'react';
import Navbar from '../../navbar/Navbar';
import { Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { actionFetchSingleComment } from '../../../actions/CommentsAction';
import { useHistory, useParams } from 'react-router-dom';
const Item = ({ comment, getComment }) => {
  const { commentId } = useParams();
  useEffect(() => {
    getComment(commentId);
  }, []);
  const history = useHistory();
  if (!comment?.id) return null;
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: 500,
          padding: 30,
          borderRadius: 20,
          boxShadow: '1px 1px 3px 1px rgba(0,0,0,0.1)',
          margin: '30px 100px',
          position: 'relative',
        }}
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
          onClick={() => history.push('/articles/' + comment.articleId)}
        >
          <span style={{ fontWeight: 800, color: 'black' }}>
            Commented On:{' '}
          </span>
          {comment?.article?.title || 'hey'}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ comment: state.entities.comment }),
  (dispatch) => ({ getComment: (id) => dispatch(actionFetchSingleComment(id)) })
)(Item);
