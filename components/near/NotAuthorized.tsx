import React from 'react'
import { login } from '../../utils/near/init'

const NotAuthorized = () => {
  return (
    <div>
      <p>You are not authorized to access this page.</p>
      <p>Try logging in to get access.</p>
      <button onClick={() => {
        login()
      }} >Login</button>
    </div>
  )
}

export default NotAuthorized
