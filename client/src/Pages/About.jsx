import React, { useEffect } from 'react'
import Layout from '../Components/Layout'
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom';
const About = ({ user,setUser }) => {
    const navigate = useNavigate()
    let height = window.innerHeight - 470

    useEffect(() => {
        if (!user?.email) {
            navigate('/')
        }
    })
    return (
        <Layout setUser={setUser} user={user} >
            <div style={{ minHeight: height + "px" }} className={`bg-[#fafafa] pt-[32px]  pb-[40px] `}>
                <div className='bg-white mx-auto max-w-[800px] p-[32px] '>
                    <h4 className='text-[24px]'>About This Group</h4>
                    <ul className='flex flex-col mt-6 gap-y-6'>
                        <li className='flex gap-x-5 items-center'>
                            <LockIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Private
                                </span>
                                <span className='text-[14px] text-[#aaa]'>
                                    Only members can see who is in the group what they posted.
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-x-5 items-center'>
                            <VisibilityIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Visible
                                </span>
                                <span className='text-[14px] text-[#aaa]'>
                                    Anyone can find this group.
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-x-5 items-center'>
                            <GroupIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Members
                                </span>
                                <span className='text-[14px] text-[#aaa]'>
                                    40+ Members
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-x-5 items-center'>
                            <AccessTimeIcon />
                            <div className='flex flex-col'>
                                <span className='text-[18px]'>
                                    Created
                                </span>
                                <span className='text-[14px] text-[#aaa]'>
                                    This group is created in Feburary 28, 2020
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default About