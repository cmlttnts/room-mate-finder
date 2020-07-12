import React, { createContext, useReducer } from 'react'

const initContext = {
  username: '',
  isLogged: false,
}

export const USER_ACTION_TYPES = {
  login: 0,
  logout: 1,
}
const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.login:
      if (action.payload.passWord === '1234')
        // TODO: no hard coded password here, use LocalStorage for now
        return { ...state, username: action.payload.userName, isLogged: true }
      return state
    case USER_ACTION_TYPES.logout:
      return { ...state, username: '', isLogged: false }
    default:
      return state
  }
}

export const UserContext = createContext(initContext)

export const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, initContext)

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}
