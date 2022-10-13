import { Link, routes } from '@redwoodjs/router'

import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { logOut, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1>HomePage</h1>
      <h2>Logged in as {currentUser?.email}</h2>
      <button onClick={() => logOut()}>Logout</button>
      <Link to={routes.login()}>Login</Link>
      <Link to={routes.home()}>Home</Link>`
    </>
  )
}

export default HomePage
