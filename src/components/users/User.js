import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';

import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
import { Link } from 'react-router-dom';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Link to='/'>Back to search</Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check' />
      ) : (
        <i className='fas fa-times-circle' />
      )}
      <div className=''>
        <img src={avatar_url} alt='' />
        <h1>{name}</h1>
        <p>{location}</p>
        <p>{bio}</p>
        <a href={html_url}>Visit GitHub Profile</a>
        <ul>
          <li>
            {login && (
              <Fragment>
                <strong>Username:</strong>
                {login}
              </Fragment>
            )}
          </li>
          <li>
            {' '}
            {company && (
              <Fragment>
                <strong>Company:</strong>
                {company}
              </Fragment>
            )}
          </li>
          <li>
            {blog && (
              <Fragment>
                <strong>Website:</strong>
                {blog}
              </Fragment>
            )}
          </li>
        </ul>
      </div>
      <div className=''>
        <div className=''>Followers:{followers}</div>
        <div className=''>Following:{following}</div>
        <div className=''>Public Repos:{public_repos}</div>
        <div className=''>Public Gists:{public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
