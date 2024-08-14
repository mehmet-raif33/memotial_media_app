'use client'
import { Input } from 'antd';
import { Button } from "antd";
const page = () => {
  return (
    <div className='grid grid-flow-col-1 md:grid-cols-2'>
      <div className='col-span-1 bg-yellow-400 p-10'>
        <form>
          dfdsd
        </form>
      </div>
      <div className='col-span-1 bg-zinc-200 p-10'>
        <form>
          <label className='text-2xl font-extrabold block text-center my-5'>
            Join to Advanture!
          </label>
          <Input placeholder='mail' type='mail' className='mb-3' />
          <Input placeholder='password' type='password' className='mb-3'/>
          <Button type='primary' className='mb-3'>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default page;