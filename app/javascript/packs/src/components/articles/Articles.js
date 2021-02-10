import React, { useEffect } from 'react';
import {
  actionFetchArticles,
  actionDeleteArticle,
} from '../../actions/ArticlesAction';
import { connect } from 'react-redux';
import ArticleItem from './ArticleItem';
import { Grid } from '@material-ui/core';

function Articles({ articles, fetchArticles, deleteArticle }) {
  useEffect(() => {
    console.log('fetching');
    fetchArticles();
  }, []);
  return (
    <div
      style={{
        padding: '5% 5%',
      }}
    >
      <Grid container>
        {articles.map((article, idx) => {
          return (
            <ArticleItem
              key={idx}
              article={article}
              deleteArticle={deleteArticle}
            />
          );
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: Object.values(state.entities.articles).reverse(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(actionFetchArticles()),
  deleteArticle: (id) => dispatch(actionDeleteArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
