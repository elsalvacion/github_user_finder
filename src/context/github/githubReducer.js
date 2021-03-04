import {
  SEARCH_USERS,
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SHOW_ALERT,
  REMOVE_ALERT,
  SET_LOADING
} from '../Types';



const githubReducer = (state, action) => {

    switch (action.type) {
      case SEARCH_USERS:
        return { 
          ...state,
          user: action.payload,
          loading: false
        }
        case GET_USER:
          return { 
            ...state,
            oneUser: action.payload,
            loading: false
          }
          case CLEAR_USER:
            return { 
              ...state,
              user: [],
              loading: false
            }
            case GET_REPOS:
              return { 
                ...state,
                repos: action.payload,
                loading: false
              }
              case SHOW_ALERT:
                return { 
                  ...state,
                  user: [],
                  loading: false,
                  msg: 'Please Enter a user',
                  alert: true
                }
              case REMOVE_ALERT:
                return {
                  ...state,
                  alert: false
                }
        case SET_LOADING:
          return { 
            ...state,
            loading: true
          }
      default:
        return state;
    }
}

export default githubReducer;