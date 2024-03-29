import React from 'react'
import { Link } from 'react-router-dom'



export default function Card({image,title,linkTo}) {
  return (
    <Link to={linkTo} className="card-link">
    <div className='bg-pink-900 rounded-xl flex flex-col p-10 m-4 overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
     <img src={image}alt=''/>
     <div className="card-content">
     <h1>{title}</h1>
     </div>
    </div>
    </Link>
  )
}
