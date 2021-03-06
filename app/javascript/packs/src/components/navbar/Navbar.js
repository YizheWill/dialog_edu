import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { actionFetchArticlesKeyword } from '../../actions/ArticlesAction';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
}));

function Navbar({ searchArticles }) {
  const [keyword, setKeyword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static' style={{ backgroundColor: '#444' }}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant='h6'
            noWrap
            style={{
              cursor: 'pointer',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 800,
            }}
            onClick={() => history.push('/')}
          >
            DIALOG EDU
          </Typography>
          {location.pathname === '/' ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search Articles…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    searchArticles(keyword);
                    setKeyword('');
                  }
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          ) : (
            ''
          )}
          <div className={classes.grow} />
          {location.pathname === '/article/new' ? (
            ''
          ) : (
            <div className={classes.sectionDesktop}>
              <Button
                style={{ color: 'white', marginRight: 20 }}
                onClick={() => history.push('/comments')}
              >
                See All Comments
              </Button>
              <Button
                variant='contained'
                style={{ backgroundColor: 'white', color: '#444' }}
                onClick={() => history.push('/article/new')}
              >
                Write an Article
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  searchArticles: (keyword) => dispatch(actionFetchArticlesKeyword(keyword)),
});

export default connect(null, mapDispatchToProps)(Navbar);
