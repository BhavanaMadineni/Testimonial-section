import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    const review = props.review;
  return (
    <div className=' flex flex-col md:relative'>
      <div className=' absolute top-[-7rem] z-[10]'>
        <img className=' aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}></img>
        <div className=' w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
      </div>
      <div className=' text-center mt-7'>
        <p className=' font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
        <p className=' text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>
    
      <div className='text-violet-400 mt-5 mx-auto'>
        <FaQuoteLeft/>
      </div>

      <div className=' text-center mt-4 text-slate-500'>
        <p>{review.text}</p>
      </div>

      <div className='text-violet-400 mt-5 mx-auto'>
        <FaQuoteRight/>
      </div>

      
    </div>
  )
}

export default Card
