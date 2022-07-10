import React from 'react'
import Layout from '../Components/Layout'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Members = ({ user,setUser }) => {

    const [users, setusers] = useState([])
    let height = window.innerHeight - 470

    const navigate = useNavigate()

    useEffect(() => {
      if (!user?.email) {
          navigate('/')
      }
  })

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/users')
            setusers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users)
    return (
        <Layout setUser={setUser} user={user}>
            <div style={{ minHeight: height + "px" }} className={`bg-[#fafafa] pt-[32px]  pb-[40px] `}>
                <div className='bg-white mx-auto max-w-[800px] p-[32px] '>
                    <h4 className='text-[24px]'>Members</h4>
                    {!user.isMember ?
                    <div className='mt-5'>
                        Sorry Only Members Can See Other Members
                    </div>
                    :
                        <ul className='flex flex-wrap mt-6 gap-y-8'>
                        {
                            users ?
                                users?.map((item) => {
                                    if(item.isMember){
                                    return (
                                        <li className='w-[50%] flex gap-x-5 items-center'>
                                            <PersonIcon />
                                            <div className='flex flex-col'>
                                                <span className='text-[18px]'>
                                                    {item.firstName}
                                                </span>

                                            </div>
                                        </li>
                                    )}
                                })
                                :
                                (
                                    <li>
                                        <div className='flex justify-center'>
                                            <h1>No members Found</h1>
                                        </div>
                                    </li>
                                )
                        }
                        {/* <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li>
                        <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li>
                        <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li>
                        <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li>
                        <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li>
                        <li className='w-[50%] flex gap-x-5 items-center'>
                            <PersonIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Mudassir Ahmed
                                </span>

                            </div>
                        </li> */}

                    </ul>}
                </div>
            </div>
        </Layout>
    )
}

export default Members