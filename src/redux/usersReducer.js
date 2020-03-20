const initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1
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
    const copyState = {...state}
    copyState.totalUsersCount = action.totalUsers;
    return copyState;
  }

  return state;
};


export const followActionCreator = (userId) => {
  return {
    type: 'FOLLOW',
    userId: userId
  }
}

export const unFollowActionCreator = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId: userId
  }
}

export const setUsersActionCreation = (users) => {
  return {
    type: 'SET-USERS',
    users: users
  }
};

export const setCurrentPageActionCreation = (page) => {
  return {
    type: 'SET-CURRENT-PAGE',
    page: page
  }
}

export const setTotalUserCountActionCreation = (totalUsers) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsers: totalUsers
  }
}

export default usersReducer;
