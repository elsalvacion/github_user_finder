import React, {useContext} from 'react';
import GithubContext from '../../context/github/githubContext'

const Alert = () => {

  const githubContext = useContext(GithubContext);
  const {alert, msg} =  githubContext;
  return (
    alert && (
      <div
        className='alert alert-danger alert-dismissible fade show'
        role='alert'
      >
        <strong>
          <i className='fas fa-exclamation-circle'></i>
        </strong>
        {msg}
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    )
  );
};

export default Alert;
