import React, { useEffect } from 'react';
import { actionFetchArticles } from '../../actions/ArticlesAction';
import { connect } from 'react-redux';

function Articles({ articles, fetchArticles }) {
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <h1>{article.title}</h1>
            <h3>{article.body}</h3>
            <h5>{article.user}</h5>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  articles: Object.values(state.entities.articles),
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(actionFetchArticles),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
