import React, { Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Repos from '../repos/Repos.js';
import GithubContext from '../../context/github/githubContext'

const User = () => {
  const githubContext = useContext(GithubContext);
  const {oneUser, getUser, getRepos,  repos} = githubContext;
  const { username } = useParams();

  useEffect(() => {
    getUser(username);
    getRepos(username);
  }, []);

  const {
    login,
    avatar_url,
    html_url,
   type,
    name,
    company,
    location,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = oneUser;
  return (
    <Fragment>

    <div className="card p-2">

    <strong>Hirable:</strong> {
    hireable 
    ?
    <i className="fas fa-check text-success"></i>
     : 
     <i className="fas fa-times text-danger"></i>
     }

     <div className="row">
       <div className="col-md-6 p-2 text-center">
         <div className="p-4">
         <img 
         src={avatar_url}
         className="rounded-circle mx-auto profile" /> 
           </div>   
          <h6 className="text-secondary">{location}</h6>
          <h2>{name}</h2>
          <h4 className="text-primary">{company}</h4>
       </div>
       <div className="col-md-6 p-4">
        <strong>Username: </strong> <span className="lead monospace">{login}</span><br/>
        <strong>Type: </strong> <span className="lead monospace">{type}</span><br/>
         <strong>Bio: </strong> <p className="lead monospace">{bio}</p>      
        <a target="_blank" href={html_url} className="btn btn-primary">View Profile</a>
      </div>
     </div>
    </div>
    <div className="card p-2 my-2">
    <button  type="button" className="btn btn-secondary my-1">
  Following <span className="badge bg-light text-dark">{following}</span>
</button>
<button  type="button" className="btn btn-warning my-1">
  Followers <span className="badge bg-secondary">{followers}</span>
</button>
<button  type="button" className="btn btn-primary my-1">
  Public Repos <span className="badge bg-secondary">{public_repos}</span>
</button>
<button  type="button" className="btn btn-success my-1">
  Public Gist <span className="badge bg-secondary">{public_gists}</span>
</button>
      </div>
      <div className="card p-2">
        <Repos repos={repos}/>
      </div>
    </Fragment>
  );
};

export default User;
