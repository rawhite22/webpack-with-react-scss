import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
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
    } = this.props.user;

    const { loading } = this.props;

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
        <Repos repos={this.props.repos} />
      </div>
    );
  }
}

export default User;
