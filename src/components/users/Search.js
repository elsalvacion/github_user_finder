import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
const Search = () => {

 const githubContext = useContext(GithubContext);

 const {user,showAlert,clearUser} = githubContext;
 
 const [text, setText] = useState('');

 const onChange = (e) => {
    setText( e.target.value);
  };
 const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert();
    } else {
      githubContext.searchUsers(text);
     setText('');
    }
  };
    return (
      <Fragment>
        <form onSubmit={onSubmit} className='mb-3'>
          <div className='my-3'>
            <input
              type='text'
              className='form-control'
              name='text'
              onChange={onChange}
              placeholder='User Search....'
              value={text}
            />
          </div>
          <button type='submit' className='btn form-control btn-success'>
            Submit
          </button>
        </form>
        {user.length > 0 && (
          <button
            className='btn form-control btn-secondary'
            onClick={clearUser}
          >
            Clear
          </button>
        )}
      </Fragment>
    );
}

export default Search;
