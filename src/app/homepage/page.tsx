'use client'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Page = () => {

  const myValue = useSelector((state: RootState) => state.userSession); // Problem burada


  return (
    <div className="w-full h-[700px] bg-blue-700 text-slate-100">
      <h1 className="w-full">
        Homepage 
        {
          myValue.isUserHere ? 
          <div>Welcome {myValue.userName}!!</div> 
          : 
          <div>Please join us!</div>
        }
      </h1>
    </div>
  )
}

export default Page
