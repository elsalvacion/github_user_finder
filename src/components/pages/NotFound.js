import React,  {Fragment} from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="card p-3 text-center d-flex justify-content-center align-items-center flex-column">
      <h1 className="h1 display-5">404 Page Not Found</h1>
      <p className="lead monospace">The page is not found. Please click the button below to go to home</p>
      <Link to="/" className="btn btn-primary">Home</Link>
    </div>
  )
}

export default NotFound
