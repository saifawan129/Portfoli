import React from 'react'
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex justify-center'>
    <footer className='flex items-center whitespace-nowrap'>
      Made with <FaHeart className='mx-1 text-red-700' /> By Saif ur Rehman
    </footer>
  </div>
    
  )
}

export default Footer
