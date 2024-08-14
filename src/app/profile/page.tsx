import React from 'react'
import { redirect } from 'next/navigation';


const Page = () => {
  redirect('/profile/posts');
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center">

      <div className="main-content mt-6 text-[13px] px-3 block w-full ">
        
      </div>

    </div>
  )
}

export default Page