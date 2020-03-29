import { usersAPI } from '../api/api';

const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map( (user) => {
          if(user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map( ( user) => {
          if(user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })
      }

    case 'SET-USERS':
      return {
        ...state,
        users: [...action.users]
      }

    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.page
      }

    case 'SET-TOTAL-USERS-COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsers
      }

    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }

    case 'TOGGLE-IS-PROGRESS':
      return {
        ...state,
        followingInProgress: action.isProgress === true
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      }

    default:
      return state;
  }
};


export const follow = (userId) => {
  return {
    type: 'FOLLOW',
    userId: userId
  }
}

export const unFollow = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId: userId
  }
}

export const setUsers = (users) => {
  return {
    type: 'SET-USERS',
    users: users
  }
};

export const setCurrentPage = (page) => {
  return {
    type: 'SET-CURRENT-PAGE',
    page: page
  }
}

export const setTotalUsers = (totalUsers) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsers: totalUsers
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: 'TOGGLE-IS-FETCHING',
    isFetching: isFetching
  }
}

export const toggleIsFollowingProgress = (isProgress, userId) => {
  return {
    type: 'TOGGLE-IS-PROGRESS',
    isProgress: isProgress,
    userId: userId
  }
}



export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setUsers([])); //чистим массив юзеров перед первой загрузуой страницы
    dispatch(toggleIsFetching(true)); //load preloader
    dispatch(setCurrentPage(currentPage)); //устанавливаем страницу пользователей на которой мы находимся

    usersAPI.getUsers(currentPage, pageSize)  //api get func
      .then( (data) => {      //return api get func
        dispatch(toggleIsFetching(false));   //cancel preloader
        dispatch(setTotalUsers(data.totalCount)); //add all users (number)
        dispatch(setUsers(data.items)); //add page users
      })
  }
}

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.postFollow(userId)
      .then( (resultCode) => {
          if(resultCode === 0) {
            dispatch(follow(userId));
          }
          dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export const unFollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.deleteFollow(userId)
      .then( (resultCode) => {
          if(resultCode === 0) {
            dispatch(unFollow(userId));
          }
          dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export default usersReducer;
