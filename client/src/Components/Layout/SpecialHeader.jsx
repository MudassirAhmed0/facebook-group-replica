import React from 'react'
import AdminHeader from './AdminHeader'
import ModeratorHeader from './ModeratorHeader'

const SpecialHeader = ({ user }) => {
  return (
    <div className='bg-black px-[50px] text-[12px] flex justify-between'>
      <ModeratorHeader user={user} />
      <AdminHeader user={user} />
    </div>
  )
}

export default SpecialHeader