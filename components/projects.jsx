import React from 'react'
import Cards from './cards'

const Projects = () => {
  return (
    <div  className=' px-10 py-32 ' id='projects'>
       <h1 className='text-5xl font-semibold'>My Projects</h1>
        <h2 className='text-2xl w-2/3 mt-5 font-medium'>Some things I've built with love, expertise and a pinch of magical ingredients.</h2>
        <div className='pt-10 '>

        <Cards/>
        </div>
    </div>
  )
}

export default Projects
