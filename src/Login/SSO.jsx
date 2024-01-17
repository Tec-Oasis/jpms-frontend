import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FcGoogle } from 'react-icons/fc'
import './Login.css'

function SSO() {
  const { loginWithRedirect, isAuthenticated, user /*, logout*/ } = useAuth0()

  return (
    <>
      {isAuthenticated ? (
        {
          /*  <p>Hello, {user.name}!</p>  <button onClick={() => logout()}>Logout</button> */
        }
      ) : (
        <>
          <button className="kkk-login" onClick={() => loginWithRedirect()}>
            <FcGoogle className="sso-google" title="sign up with google" />
          </button>
        </>
      )}
    </>
  )
}

export default SSO
