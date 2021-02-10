import React, { useEffect, useState } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionFetchArticle } from '../../actions/ArticlesAction';
import Navbar from '../navbar/Navbar';
import Comment from './comments/Comment';

function ArticleShow({ article, fetchArticle }) {
  const { articleId } = useParams();
  useEffect(() => {
    fetchArticle(articleId);
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          right: 30,
          top: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 2,
            height: 100,
            backgroundColor: '#444',
            opacity: 0.3,
          }}
        ></div>
        <Comment
          articleId={article.id}
          comments={article.comments ? Object.values(article.comments) : []}
        />
        <div
          style={{
            width: 2,
            height: 100,
            backgroundColor: '#444',
            opacity: 0.3,
          }}
        ></div>
      </div>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Typography
          style={{
            fontSize: 30,
            fontWeight: 800,
            marginBottom: '2rem',
            fontFamily: "'Oswald', sans-serif",
          }}
        >
          {article?.title}
        </Typography>
        <Typography
          style={{
            fontSize: 18,
            fontWeight: 100,
            maxWidth: 500,
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: 1,
            lineHeight: 3,
          }}
        >
          {article?.body}
        </Typography>

        <div
          style={{
            marginTop: 100,
            marginBottom: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            style={{
              marginBottom: '2rem',
              width: 100,
              height: 100,
              backgroundColor: 'red',
              fontSize: 30,
              fontWeight: 900,
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            {article?.user?.username
              ?.split(' ')
              ?.map((el) => el[0].toUpperCase())
              ?.join('')
              .slice(0, 1)}
          </Avatar>
          <Typography color='primary'>By: {article?.user?.username}</Typography>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ article: state.entities.article });
const mapDispatchToProps = (dispatch) => ({
  fetchArticle: (id) => dispatch(actionFetchArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
