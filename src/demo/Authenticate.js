import React, { useState, useEffect } from "react"
import * as fcl from "@blocto/fcl"

import Card from '../components/Card'
import Header from '../components/Header'

const SignInOutButton = ({ user: { loggedIn } }) => {
  console.log(fcl.getAccount());
  const signInOrOut = async (event) => {
    event.preventDefault()

    if (loggedIn) {
      fcl.unauthenticate()
    } else {
      fcl.authenticate()
    }
  }

  return (
    <button onClick={signInOrOut}>
      {loggedIn ? 'Sign Out' : 'Sign In/Up'}
    </button>
  )
}

const CurrentUser = () => {
  const [user, setUser] = useState({})

  useEffect(() =>
    fcl
      .currentUser()
      .subscribe(user => setUser({ ...user }))
    , [])

  return (
    <Card>
      <Header>Sign In and Sign Up Using Blocto wallet</Header>
      <SignInOutButton user={user} />
    </Card>
  )
}

export default CurrentUser
