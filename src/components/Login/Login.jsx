import './Login.scss'

import React, { useContext, useState } from 'react'
import {
  UserContext,
  USER_ACTION_TYPES,
} from 'contexts/UserContext/UserContext'
import Text from 'components/Text/Text'

const Login = () => {
  const { userState, userDispatch } = useContext(UserContext)

  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    userDispatch({
      payload: { userName, passWord },
      type: USER_ACTION_TYPES.login,
    })
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handlePassWordChange = (e) => {
    setPassWord(e.target.value)
  }

  if (userState.username === '') {
    return (
      <form className="Login" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <Text tid="username" />
        </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleUserNameChange}
        />
        <label htmlFor="passwordLogin">
          <Text tid="password" />
        </label>
        <input
          type="password"
          name="password"
          id="passwordLogin"
          onChange={handlePassWordChange}
        />
        <button type="submit">Login</button>
      </form>
    )
  }
  return <p>You are logged in as {userState.username}</p>
}

export default Login
