import React from 'react'

const RepoItem = ({repo}) => {
  return  <a href={repo.html_url} className="nav-link" >{repo.name}</a>
}

export default RepoItem
