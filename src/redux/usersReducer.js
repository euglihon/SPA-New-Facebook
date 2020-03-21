const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
};

const usersReducer = (state = initialState, action) => {
  if (action.type === 'FOLLOW') {
    return {
      ...state,
      users: state.users.map( (user) => {
        if (user.id === action.userId) {
          return {...user, followed: true}
        }
        return user
      })
     }
  }

  else if (action.type === 'UNFOLLOW') {
    return {
      ...state,
      users: state.users.map( (user) => {
        if (user.id === action.userId) {
          return {...user, followed: false}
        }
        return user
      })
     }
  }

  else if (action.type === 'SET-USERS') {
    const copyState = {...state};
    copyState.users = [...action.users]; //add users
    return copyState;
  }

  else if (action.type === 'SET-CURRENT-PAGE') {
    const copyState = {...state};
    copyState.currentPage = action.page;
    return copyState;
  }

  else if (action.type === 'SET-TOTAL-USERS-COUNT') {
    const copyState = {...state};
    copyState.totalUsersCount = action.totalUsers;
    return copyState;
  }

  else if (action.type === 'TOGGLE-IS-FETCHING') {
    const copyState = {...state};
    copyState.isFetching = action.isFetching;
    return copyState;
  }

  return state;
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

export default usersReducer;
