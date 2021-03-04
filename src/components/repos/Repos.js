import React from 'react'
import RepoItem from './RepoItem'
const Repos = ({repos}) => {
  return (
    <React.Fragment>
    <h2 className="text-center">Public Repos</h2>
    {repos.map(repo => <RepoItem repo={repo} key={repo.id} /> )}
    </React.Fragment>
  )
}

export default Repos
