import { useReducer } from 'react';
import githubContext from './githubContext'
import axios from 'axios'
import githubReducer from './githubReducer'
import {
  SEARCH_USERS,
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SHOW_ALERT,
  REMOVE_ALERT,
  SET_LOADING
} from '../Types'

let githubClientId;
let githubClentSecret;

if(process.env.NODE_ENV !== 'production')
{
  githubClientId = githubClientId;
  githubClentSecret = githubClentSecret;
}
else 
{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClentSecret = process.env.GITHUB_CLIENT_SECRET;

}

const GithubState = props => {
  const initialState = {
    user: [],
    loading: false,
    msg: '',
    alert: false,
    oneUser: {},
    repos: []
  }


  const [state, dispatch] = useReducer(githubReducer,initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&clent_secret=${githubClentSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });

  };

  // Clear User
  const clearUser = () => dispatch({type: CLEAR_USER});

  // Get Users
  const getUser = async (username) => {
    setLoading();
    
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&clent_secret=${githubClentSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    })

  };

  // Get Repos
  const getRepos = async (username) => {
    setLoading();
     const res = await axios.get(
       `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${githubClientId}&clent_secret=${githubClentSecret}`
     );

     dispatch({
       type: GET_REPOS,
       payload: res.data
     })
   };

  //  Show Alert
  const showAlert = () => {
    
    dispatch({
      type: SHOW_ALERT
    })
    setTimeout(() => {
     dispatch({type: REMOVE_ALERT})
    }, 5000);
  };

  // Set Loading
  const setLoading = () => dispatch({type: SET_LOADING});
  
  return (
    <githubContext.Provider
    value = {{ 
      user: state.user,
      loading: state.loading,
      msg: state.msg,
      alert: state.alert,
      oneUser: state.oneUser,
      repos: state.repos,
      searchUsers,
      clearUser,
      getUser, 
      getRepos,
      showAlert
    }}
    >
      {props.children}
    </githubContext.Provider>
  )
}

export default GithubState;