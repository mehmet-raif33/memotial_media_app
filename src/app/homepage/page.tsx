'use client'
import { UseSelector , useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@reduxjs/toolkit/query';
import { up , down } from '../../redux/userSession/userSession'

const Page = () => {

  const dispatch = useDispatch();  
  const myValue = useSelector((state: RootState) => state.userSession); // 


  return (
    <div className="w-full h-[700px] bg-blue-700 text-slate-100">
      <h1 className="w-full">
        Homepage 
        {
          myValue
        }
      </h1>
      <button onClick={() => dispatch(up(5))} className='bg-sky-500 text-white p-5 rounded-md transition-all hover:scale-105'>
        Up
      </button>
      <button onClick={() => dispatch(down(5))} className='bg-red-500 text-white p-5 rounded-md transition-all hover:scale-105'>
        Down
      </button>
    </div>
  )
}

export default Page
