import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NewModerator from '../Modals/NewModerator';

const AdminHeader = ({ user }) => {
  const openPopup = () => {
    document.getElementById('newModerator').classList.add('opacity-[1]')
    document.getElementById('newModerator').classList.add('pointer-events-initial')

    document.getElementById('newModerator').classList.remove('pointer-events-none')
    document.getElementById('newModerator').classList.remove('opacity-[0]')

  }
  return (
    <>
      {
        user?.isAdmin && (
          <>
            <div className='text-white flex items-center gap-x-2 cursor-pointer' onClick={openPopup}>
              <PersonAddIcon fontSize='small' />
              Add Moderator
            </div>
            <NewModerator />
          </>
        )
      }


    </>
  )
}

export default AdminHeader