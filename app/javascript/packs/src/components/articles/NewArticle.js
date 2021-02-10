import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Navbar from '../navbar/Navbar';
import { connect } from 'react-redux';
import { actionCreateArticle } from '../../actions/ArticlesAction';
import { useHistory } from 'react-router-dom';

function NewArticle({ createArticle }) {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [err, setErr] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!body.length || !title.length || title.length < 10) {
      setErr(
        'Must have a title and some content, and the title must be at least 10 characters'
      );
      return;
    }
    const article = { title, body, user_id: 1 };
    createArticle(article);
    history.push('/');
  };
  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '70%',
          marginLeft: '10%',
          height: '80%',
          marginTop: 100,
        }}
      >
        <Typography
          style={{
            marginBottom: '2rem',
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 800,
            fontSize: 40,
          }}
        >
          Create New Article
        </Typography>
        <p style={{ color: 'red' }}>{err}</p>
        <TextField
          id='outlined-multiline-flexible'
          label='Article Title'
          multiline
          rowsMax={4}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant='outlined'
          style={{ marginBottom: '1rem' }}
        />

        <TextField
          id='outlined-multiline-static'
          label='Article Content'
          multiline
          rows={4}
          variant='outlined'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ marginBottom: '1rem' }}
        />
        <Button
          variant='contained'
          style={{
            backgroundColor: '#444',
            color: 'white',
            height: 40,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 800,
            fontSize: 20,
          }}
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(null, (dispatch) => ({
  createArticle: (article) => dispatch(actionCreateArticle(article)),
}))(NewArticle);
