import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({ user,setUser }) => {
    const [btnText, setBtntext] = useState(user?.isMember ? "Joined":"Join Group")

    const logOut =()=>{
        let newUser ={email:'',password:''}
        setUser({...newUser})
    }
    const joinReq = async () => {
        setBtntext("Request sent..")
        try {
            const { data } = await axios.post('http://localhost:5000/request', user)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header>
            <div className='flex bg-blue-300 h-[60px] items-center justify-center'>
                <h1 className='text-[22px] text-white uppercase'>Facebook Group Replica</h1>
                <span onClick={logOut} className='absolute text-white right-[50px] hover:opacity-[0.5] transition-all duration-300 cursor-pointer'>Logout</span>
            </div>
            <div className='relative'>
                <div className='bg-red-500 h-[250px]'>

                </div>
                <div className='bg-purple-400 h-[200px] w-[200px] absolute bottom-[-100px] rounded-full border-4 border-white left-[50px]' >
                    <div className=' bottom-[20px] right-[-130px] absolute '>
                        <span className='text-[24px]'>
                            Test Group
                        </span><br />
                        <span className='text-[14px] text-gray-400 '>
                            40+ Members
                        </span>
                    </div>
                </div>
                <button onClick={() => joinReq()} className='absolute bottom-[-65px] w-[150px] rounded-[24px] hover:bg-blue-400 transition-all duration-300 cursor-pointer h-[40px] text-[18px]     right-[50px] bg-blue-300 text-white  '>{btnText}</button>
            </div>
            <div className=' h-[120px] border-b border-grey-400'>

            </div>
            <ul className='border-b  justify-center gap-x-[40px] items-center flex px-[50px] uppercase tracking-[1.5px] h-[40px] border-grey-400'>
                <li className='cursor-pointer hover:text-gray-600 transition-all duration-300'>
                    <NavLink to="/about" className={({ isActive }) => isActive && "text-blue-300"}>
                        About
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:text-gray-600 transition-all duration-300'>
                    <NavLink to="/members" className={({ isActive }) => isActive && "text-blue-300"}>
                        Members
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:text-gray-600 transition-all duration-300'>
                    <NavLink to="/discussion" className={({ isActive }) => isActive && "text-blue-300"}>
                        Discussion
                    </NavLink>
                </li>
                <li className='cursor-pointer hover:text-gray-600 transition-all duration-300'>
                    <NavLink to="/courses" className={({ isActive }) => isActive && "text-blue-300"}>
                        Courses
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header