import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({user}) => {
  const { login, avatar_url } = user;

  return (
    <div className='card text-center rounded mx-auto my-2 p-3'>
      <img
        src={avatar_url}
        className='rounded-circle mx-auto'
        style={{
          width: '100px',
        }}
      />

      <h3 className='my-2'>{login}</h3>

      <Link to={`/user/${login}`} className='btn btn-secondary my-2'>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
