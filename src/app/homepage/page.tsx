'use client'
import { useSelector , useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { useState } from 'react'
import supabase from '@/supabase/info'
import { logout } from '@/redux/userSession/userSession'
import { useRouter } from 'next/navigation'


const Page = () => {

  const myValue = useSelector((state: RootState) => state.userSession); // Problem burada
  const dispatch = useDispatch()
  const Router = useRouter();

  const [username,setusername] = useState(null);
  const [mail,setMail] = useState(null);
  const [imageUrl,setImageUrl] = useState('');

  const logOut = async () => {
    await supabase.auth.signOut()
    dispatch(logout())
    Router.push('/authpage')
  }

  return (
    <div className="w-full h-[700px] bg-blue-700 text-slate-100 p-5">
      <h1 className="w-full">
        Homepage 
        {
          myValue.isUserHere ? 
          <div>Welcome {myValue.userName}!!</div> 
          : 
          <div>Please join us!</div>
        }
      </h1>
      <div className='grid grid-cols-2 gap-3 bg-zinc-200 rounded-2xl p-3 my-5'>
        <div className=' bg-slate-700 p-5 rounded-lg h-56'>
          <span className='text-2xl font-semibold'>
            Account
          </span>
          <div className='flex justify-between mt-5'>
            <div className='flex flex-col gap-3 text-md font-thin'>
              <span>
                Username: {username}
              </span>
              <span>
                Mail: {mail}
              </span>
              <button onClick={logOut} className='bg-red-700 p-3 font-semibold rounded-lg transition-all hover:scale-105'>
                Logout
              </button>
            </div>
            <div>
              <Image src={imageUrl} alt='asd' />
            </div>
          </div>
        </div>
        <div className=' bg-slate-700 p-5 rounded-lg'>
          sdfdsf
        </div>
      </div>
    </div>
  )
}

export default Page
