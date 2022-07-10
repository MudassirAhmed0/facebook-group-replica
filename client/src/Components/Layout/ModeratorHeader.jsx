import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MemberRequests from '../Modals/MemberRequests';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ModeratorHeader = ({ user }) => {
    const [requests, setRequests] = useState([])

    const fetchrequests = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/allRequests')
            setRequests(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchrequests()
    }, [])

    const openPopup = () => {
        document.getElementById('memberRequest').classList.add('opacity-[1]')
        document.getElementById('memberRequest').classList.add('pointer-events-initial')

        document.getElementById('memberRequest').classList.remove('pointer-events-none')
        document.getElementById('memberRequest').classList.remove('opacity-[0]')

    }

    return (
        <>
            {
                user?.isModerator && (
                    <>
                        <div className='text-white flex items-center gap-x-2 cursor-pointer' onClick={openPopup}>
                            <FavoriteIcon fontSize='small' />
                            View Join Requests ({requests.length})
                        </div>
                        <MemberRequests requests={requests} />
                    </>
                )
            }

        </>
    )
}

export default ModeratorHeader