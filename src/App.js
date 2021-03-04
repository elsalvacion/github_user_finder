import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/users/Alert';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound'
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GithubState from './context/github/GithubState'

const App = () => {
    return (
      <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container p-3'>
            {alert && (
              <Alert />
            )}
            <Switch>
              <Route exact path='/'>
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/user/:username'>
                <User/>
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
      </GithubState>
    );
  
}

export default App;
