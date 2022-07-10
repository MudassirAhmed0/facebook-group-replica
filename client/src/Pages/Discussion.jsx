import React, { useState } from 'react'
import Layout from '../Components/Layout'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import axios from 'axios';

const Discussion = ({ user,setUser }) => {
  const [disccusionText, setDiscussionText] = useState('')
  let height = window.innerHeight - 470

  const [discussions, setDiscussions] = useState()
  const fetchDiscussions = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/discussions')
      setDiscussions(data)
    } catch (error) {
      console.log(error)
    }
  }


  let postData = {
    name: user.firstName + user.lastName,
    date: Date.now(),
    message: disccusionText
  }
  const postDiscussions = async () => {
    if (!postData.message == "") {
      setDiscussionText("")
      try {
        const { data } = await axios.post('http://localhost:5000/postDiscussion', postData)
        setDiscussions(data)
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("White Something Bro!!!")
    }

  }

  useEffect(() => {
    fetchDiscussions()
  }, [])

  return (
    <Layout setUser={setUser} user={user}>
      <div style={{ minHeight: height + "px" }} className={`bg-[#fafafa] pt-[32px]  pb-[40px] `}>
        <div className='bg-white mx-auto max-w-[800px] p-[32px] '>
          <h4 className='text-[24px]'>Discussions</h4>
         {!user.isMember ? 
         <div className='mt-5'>Sorry! This Section is only for Members</div>
         :
          <>
          <div className='mt-[40px]'>
            <textarea className='w-full border p-4' name="disccusionText" id="discussionText" value={disccusionText} onChange={(e) => setDiscussionText(e.target.value)} cols="30" rows="06"></textarea>
            <button onClick={() => postDiscussions()} className='bg-blue-300 transition-all duration-300 hover:bg-blue-400  text-white w-[120px] h-[40px] rounded-[24px]' >Post  </button>
          </div>
          <ul className='flex flex-col mt-10 gap-y-8'>
            {
              discussions?.map((item, index) => {
                return (
                  <li key={index} className='flex flex-col gap-y-4'>
                    <div className=' flex gap-x-5 items-center'>
                      <PersonIcon />
                      <div className='flex flex-col'>
                        <span className='text-[18px]'>
                          {item.name}
                        </span>
                        <span className='text-[14px] text-[#aaa]'>
                          {new Date(item.date).toDateString()}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className='text-[14px]'>
                        {item.message}
                      </p>
                    </div>
                  </li>
                )
              })
            }


          </ul>
          </>}
        </div>
      </div>
    </Layout>
  )
}

export default Discussion