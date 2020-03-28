import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1aa28f91-66e0-43de-9c03-07fbb8ee7bd0'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return (
      instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then( (response) => response.data )
    )
  }
}

export const profileAPI = {
  getProfile(userId) {
    return (
      instance
        .get(`profile/${userId}`)
        .then( (response) => response.data)
    )
  }
}

export const followUnFolowAPI = {
  deleteFollow(userId) {
    return (
      instance
        .delete(`follow/${userId}`)
        .then( (response) => response.data.resultCode)
    )
  },

  postFollow(userId) {
    return (
      instance
        .post(`follow/${userId}`, {})
        .then( (response) => response.data.resultCode)
    )
  }
}

 export const loginAPI = {
   getLoginInfo() {
     return (
      instance
        .get('auth/me')
        .then( (response) => response.data )
     )
   }
 }
