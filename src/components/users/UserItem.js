import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url, id } }) => {
  return (
    <div>
      <img style={imgStyle} src={avatar_url} alt='user profile picture' />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`}>More..</Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

const imgStyle = {
  width: '70px',
  borderRadius: '50%',
};

export default UserItem;
