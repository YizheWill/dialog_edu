import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
    margin: 30,
    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#444',
  },
}));

export default function ArticleCard({ article, deleteArticle }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} small={6} style={{ position: 'relative' }}>
      <IconButton
        style={{ position: 'absolute', right: 35, top: 35 }}
        onClick={() => deleteArticle(article.id)}
      >
        <DeleteForeverIcon style={{ color: 'red', opacity: 0.3 }} />
      </IconButton>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {article?.author
                ?.split(' ')
                ?.map((el) => el[0].toUpperCase())
                ?.join('')
                ?.slice(0, 2)}
            </Avatar>
          }
          title={
            <Typography style={{ fontFamily: "'Oswald', sans-serif" }}>
              {article.title}
            </Typography>
          }
          subheader={article.createdAt.slice(0, 10)}
        />
        <CardContent
          style={{ cursor: 'pointer' }}
          onClick={() => history.push(`/articles/${article.id}`)}
        >
          <Typography
            style={{ fontFamily: "'Oswald', sans-serif" }}
            variant='body2'
            color='primary'
            component='p'
          >
            {article.author}
          </Typography>
          <Typography
            style={{ fontFamily: "'Oswald', sans-serif" }}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {article.body.slice(0, 50) + '...'}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
