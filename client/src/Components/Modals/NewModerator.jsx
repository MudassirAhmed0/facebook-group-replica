import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ModalLayout from './ModalLayout'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


const NewModerator = () => {
  const [email, setEmail] = useState('')
  const closePopup = () => {
    document.getElementById('newModerator').classList.remove('opacity-[1]')
    document.getElementById('newModerator').classList.remove('pointer-events-initial')

    document.getElementById('newModerator').classList.add('pointer-events-none')
    document.getElementById('newModerator').classList.add('opacity-[0]')
  }

  let modeData = {
    email 
  }
  const addingModerator = async () => {
    if (  !modeData.email == "") {
      try {
        const { data } = await axios.post('http://localhost:5000/addModerator', modeData)
        closePopup()
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Khali to nhi jane donga yar ;)")
    }
  }
  return (
    <ModalLayout id='newModerator'>
      <div className='bg-white relative w-[450px] pt-[45px] p-[32px]'>
        <div className='absolute right-[15px] top-[15px] cursor-pointer' onClick={closePopup}>
          <CloseIcon />
        </div>
        <h1 className='text-center uppercase text-[20px]'>Add New Moderator</h1>
        <div className='flex flex-col mt-5 gap-y-4'>
          {/* <TextField value={name} onChange={(e) => setName(e.target.value)} id="name" fullWidth type='text' label="Name" variant="outlined" /> */}
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="email" fullWidth type='text' label="Email" variant="outlined" />
        </div>
        <span className='text-green-400 mt-2 block'>Successfully Added (bhai koi error message mt do hamesha add hoga)</span>
        <button onClick={addingModerator} className='bg-blue-300 mx-auto block hover:bg-blue-400 transition-all duration-300 text-white mt-4 w-[120px] h-[45px] rounded-[24px]'>Added</button>

      </div>

    </ModalLayout>
  )
}

export default NewModerator