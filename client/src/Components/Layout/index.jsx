import React from 'react'
import Header from './Header'
import ModeratorHeader from './ModeratorHeader'
import SpecialHeader from './SpecialHeader'

const Layout = ({ children, user,setUser }) => {
  return (
    <>
      <SpecialHeader user={user} />
      <Header  setUser={setUser} user={user}/>
      {children}
    </>
  )
}

export default Layout