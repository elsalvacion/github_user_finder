import React, {useContext} from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext'

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { user, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='row'>
        {user.map((user) => {
          return (
            <div key={user.id} className='col-md-4'>
              <UserItem user={user} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Users;
