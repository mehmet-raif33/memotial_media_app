'use client'
import { Input } from 'antd';
import { Button } from "antd";
import Image from 'next/image';
import authGirl from '../../Assets/images/authGirl.jpg'
import { GoogleLoginButton } from 'react-social-login-buttons';
import supabase from '../../supabase/info'
import { useEffect, useState } from 'react';

const page = () => {

  const [datam, setData] = useState('')

  const googleAuthProcess = async () => {
    const { data , error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    setData(datam)
  }

  return (
    <div className='grid grid-flow-col-1 md:grid-cols-2 h-[500px] justify-center'>
      <div 
      className="col-span-1 bg-yellow-400"  
      >
        <Image src={authGirl} alt='sadsad' className='h-full object-cover' />
      </div>
      <div className='col-span-1 bg-zinc-200 p-10 flex flex-row items-center px-10'>
        <form>
          <label className='text-2xl font-extrabold block text-center my-5'>
            Join to Advanture!
          </label>
          <Input placeholder='mail' type='mail' className='mb-3' />
          <Input placeholder='password' type='password' className='mb-3'/>
          <Button type='primary' className='mb-3'>
            Sign In
          </Button>
          <div className='w-52'>
            <GoogleLoginButton onClick={googleAuthProcess}>
              <span className='text-sm font-semibold'>
                Login With Google
              </span>
            </GoogleLoginButton>     
            <span>
              {datam}  
            </span>       
          </div>

        </form>
      </div>
    </div>
  )
}

export default page;