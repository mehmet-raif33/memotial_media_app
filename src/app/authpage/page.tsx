'use client'
import { Input } from 'antd';
import { Button } from "antd";
import Image from 'next/image';
import authGirl from '../../Assets/images/authGirl.jpg'
import { GoogleLoginButton } from 'react-social-login-buttons';
import supabase from '../../supabase/info'

const Page = () => {

  const googleAuthProcess = async () => {
    
      try {
        await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: 'https://memotial-media-app.vercel.app/auth'
          }
        });
      } catch (err) {
        return err 
      }
    
  };
  

  return (
    <div className='grid grid-flow-col-1 md:grid-cols-2 h-[500px] justify-center'>

      <div className="col-span-1 bg-yellow-400"  >
        <Image src={authGirl} alt='sadsad' className='h-full object-cover' />
      </div>

      <div className='col-span-1 bg-zinc-200 '>
        <div className=' flex flex-row justify-center h-full'>
          <form className='justify-center flex flex-col p-5 w-3/4 md-w-full'>
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
            </div>

          </form>          
        </div>

      </div>

    </div>
  )
}

export default Page;