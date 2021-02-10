import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  Typography,
  Avatar,
  TextField,
  IconButton,
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux';
import {
  actionFetchCommentsUnderArticle,
  actionCreateComment,
  actionEditComment,
  actionDeleteComment,
} from '../../../actions/CommentsAction';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles({
  list: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  inputStyle: {
    borderColor: '#444 !important',
  },
});

const Item = ({ comment, editComment, deleteComment }) => {
  const [body, setBody] = useState(comment.content);
  const classes = useStyles();
  const [showEdit, setShowEdit] = useState('none');
  const handleUpdate = () => {
    const commentData = {
      id: comment.id,
      content: body,
      user_id: comment.commenter.id,
      article_id: comment.article.id,
    };
    if (!body.length) return;
    editComment(commentData);
  };
  return (
    <div style={{ width: 300, position: 'relative' }}>
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
      <div style={{ display: showEdit }}>
        <TextField
          label='Edit Comment'
          multiline
          rows={3}
          variant='outlined'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Create a comment'
          InputProps={{
            classes: {
              notchedOutline: classes.inputStyle,
            },
          }}
          style={{
            marginTop: 30,
            width: 300,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
          }}
        >
          <Button
            variant='outlined'
            color='primary'
            onClick={() => {
              handleUpdate();
              setShowEdit('none');
            }}
          >
            Submit
          </Button>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => setShowEdit('none')}
          >
            Cancel
          </Button>
        </div>
      </div>
      <Typography
        style={{
          marginTop: '0.5rem',
          fontSize: 15,
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 800,
          display: showEdit === 'none' ? 'block' : 'none',
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
          display: showEdit === 'none' ? 'block' : 'none',
        }}
      >
        {comment?.createdAt.slice(0, 10)}
      </Typography>
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 20,
          display: showEdit === 'none' ? 'block' : 'none',
        }}
      >
        <IconButton
          style={{ width: 30, height: 30, marginRight: '.3rem' }}
          onClick={() => setShowEdit('block')}
        >
          <EditIcon style={{ width: 20, height: 20, color: 'pink' }} />
        </IconButton>
        <IconButton
          style={{ width: 30, height: 30 }}
          onClick={() => deleteComment(comment.id)}
        >
          <DeleteForeverIcon style={{ width: 20, height: 20, color: 'red' }} />
        </IconButton>
      </div>
    </div>
  );
};

function Comment({
  comments,
  fetchComments,
  createComment,
  editComment,
  deleteComment,
}) {
  const [content, setContent] = useState('');
  const [err, setErr] = useState('');
  const { articleId } = useParams();
  const sendComment = () => {
    if (!content.length) {
      setErr('comment cannot be empty');
      return;
    }
    const commentData = {
      article_id: articleId,
      content,
      user_id: 1,
    };
    createComment(commentData);
    setContent('');
    setErr('');
  };
  useEffect(() => {
    fetchComments(articleId);
  }, []);
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
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
        Comments
      </Typography>

      <p style={{ color: 'red', marginLeft: 100 }}>{err}</p>
      <div style={{ position: 'relative' }}>
        <TextField
          label='Create a comment'
          multiline
          rows={4}
          variant='outlined'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Create a comment'
          InputProps={{
            classes: {
              notchedOutline: classes.inputStyle,
            },
          }}
          style={{
            marginTop: 30,
            marginLeft: 100,
            width: 300,
          }}
        />
        <Button
          onClick={sendComment}
          style={{ position: 'absolute', bottom: 10, right: 110, width: 110 }}
        >
          send
        </Button>
      </div>
      <div
        className={classes.list}
        onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, true)}
      >
        {Object.values(comments)
          ?.reverse()
          .map((comment, idx) => {
            return (
              <Item
                key={idx}
                comment={comment}
                editComment={editComment}
                deleteComment={deleteComment}
              />
            );
          })}
      </div>
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={'right'}>
          <Button
            onClick={toggleDrawer('right', true)}
            variant='contained'
            style={{ backgroundColor: '#444', color: 'white', margin: '10px' }}
          >
            Comments
          </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}

export default connect(
  (state) => ({ comments: state.entities.comments }),
  (dispatch) => ({
    fetchComments: (id) => dispatch(actionFetchCommentsUnderArticle(id)),
    createComment: (comment) => dispatch(actionCreateComment(comment)),
    editComment: (comment) => dispatch(actionEditComment(comment)),
    deleteComment: (id) => dispatch(actionDeleteComment(id)),
  })
)(Comment);
