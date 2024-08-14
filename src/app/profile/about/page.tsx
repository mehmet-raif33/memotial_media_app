import Facebook from '../../../Assets/images/icons8-facebook-96.png';
import Instagram from '../../../Assets/images/icons8-instagram-96.png';
import Youtube from '../../../Assets/images/icons8-youtube-96.png';
import Tiktok from '../../../Assets/images/icons8-tiktok-96.png';
import Image from 'next/image';

const page = () => {

    
  const about = 'ajsdaksdjl'


  return (
    <div className="about bg-white shadow-md rounded-md flex justify-center flex-col">
      <div className='flex flex-row p-7 justify-around md:p-10'>
        <div className="sm:mr-24 mr-10">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="text-gray-700">Birthday: {about}</p>
          <p className="text-gray-700">Account based in: {about}</p>
          <p className="text-gray-700">Date joined: {about}</p>
          <p className="text-gray-700">Sex: {about}</p>
          <p className="text-gray-700">{about}</p>          
        </div>
        <div className="flex flex-col justify-center items-center relative bottom-5">
          <label>
            Other Connections:
          </label>
          <div className='flex flex-row h-20'>
            <div className='grid grid-cols-2 lg:grid-cols-8'>
              <a className='lg:col-span-2 sm:col-span-1 w-16 lg:w-24' href='https://www.facebook.com'target='_blank' >
                <Image src={Facebook} alt='asd'/>
              </a>
              <a className='lg:col-span-2 sm:col-span-1 w-16  lg:w-24' href='https://www.youtube.com' target='_blank'>
                <Image src={Youtube} alt='asd' />
              </a>   
              <a className='lg:col-span-2 sm:col-span-1 w-16  lg:w-24' href='https://www.tiktok.com' target='_blank'>
                <Image src={Tiktok} alt='asd' />
              </a>
              <a className='lg:col-span-2 sm:col-span-1 w-16  lg:w-24' href='https://www.instagram.com' target='_blank'>
                <Image src={Instagram} alt='asd' />
              </a>          
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
