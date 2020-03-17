const initialState = {
  users: [
    // {id: 1, followed: false, name: 'Zeka', status: 'Welcome', location: {city: 'Warsaw', country: 'Poland' }, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-RhIEzw81SvY%2FT7ZGODCyT1I%2FAAAAAAAAAG4%2FO8EXS_Apd10%2Fs1600%2Fcobaki_08.jpg&f=1&nofb=1' },

    // {id: 2, followed: false, name: 'Ivan', status: 'I live in Russia', location: {city: 'Moscow', country: 'Russia' }, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FYl02.jpg&f=1&nofb=1' },

    // {id: 3, followed: true, name: 'Andrew', status: 'Hello friends', location: {city: 'Barcelona', country: 'Spain' }, photoUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRZqa9nXbLgY%2Fmaxresdefault.jpg&f=1&nofb=1' },
  ]
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
    copyState.users = [...state.users, ...action.users]; //add users
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

export default usersReducer;
