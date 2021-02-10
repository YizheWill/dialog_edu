import React, { useEffect, useState } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actionFetchArticle } from '../../actions/ArticlesAction';
import Navbar from '../navbar/Navbar';

function ArticleShow({ article, fetchArticle }) {
  const { articleId } = useParams();
  useEffect(() => {
    fetchArticle(articleId);
  }, []);
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar style={{ marginRight: '1rem' }}>
          {article?.user?.username
            ?.split(' ')
            ?.map((el) => el[0].toUpperCase())
            ?.join('')
            .slice(0, 1)}
        </Avatar>
        <Typography>Author: {article?.user?.username}</Typography>
      </div>
      <Typography style={{ fontSize: 30, fontWeight: 800 }}>
        {article?.title}
      </Typography>
      <Typography style={{ fontSize: 18, fontWeight: 100 }}>
        {article?.body}
      </Typography>
    </div>
  );
}
const mapStateToProps = (state) => ({ article: state.entities.article });
const mapDispatchToProps = (dispatch) => ({
  fetchArticle: (id) => dispatch(actionFetchArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
