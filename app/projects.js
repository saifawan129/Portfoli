import React from 'react'

function Projects() {
  return (
    <div>
      <div className='m-10'>
        <nav className='grid grid-cols-1'>
            <h3 className='font-bold text-xl'>Featured Projects.</h3>
            <p className='text-green-600'>Here's some of my projects that I have worked on.</p>
        </nav>
        <div className='flex justify-end '>

            <button className='text-white  rounded-3xl bg-green-600 hover:bg-green-800 p-2 '>
                <span className='text-sm '>

                View All
                </span>
                
                </button>
        </div>
            <div className="border-t border-gray-300 my-4"></div>
      </div>
    </div>
  )
}

export default Projects
