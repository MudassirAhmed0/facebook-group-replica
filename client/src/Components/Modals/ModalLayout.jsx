import React from 'react'

const ModalLayout = ({id,children}) => {
  return (
    <div id={id} className='fixed transition-all duration-300 pointer-events-none opacity-[0] z-50 flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]'>
            {children}
    </div>
  )
}

export default ModalLayout