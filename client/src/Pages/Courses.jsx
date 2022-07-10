import React, { useEffect } from 'react'
import Layout from '../Components/Layout'
import { useNavigate } from 'react-router-dom';

const Courses = ({ user,setUser }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!user?.email) {
        navigate('/')
    }
})
  return (
    <Layout setUser={setUser}user={user}>

    </Layout>
  )
}

export default Courses