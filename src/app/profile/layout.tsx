'use client'
import Link from "next/link";
import ProfileImage from '../../Assets/images/profileImage.jpg'
import Image from "next/image";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (

    <div className="flex flex-col py-8 items-center bg-zinc-200 shadow-md w-full ">

        <div className="flex flex-row md:flex-row justify-center items-center md:items-start w-full px-10 pb-10">

          <div className="pr-5 md:p-0">
            <Image src={ProfileImage} alt="Profile Picture" className=" md:w-[150px] w-[100px] rounded-full" />
          </div>

          <div className="text-center md:text-left md:ml-5 w-[200px] md:w-[400px]">
            <h1 className="text-lg  md:text-2xl font-bold">mehmetraif33</h1>
            <p className="text-[10px] md:text-[11px] text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum, asperiores quas iure sunt aut recusandae voluptatibus nostrum perferendis itaque obcaecati?</p>
            <div className="flex mt-5 justify-center md:justify-start text-sm">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2">Edit Profile</button>
              <button className="bg-green-500 text-white px-3 py-2 rounded-md">Follow</button>
            </div>
          </div>
          
        </div> 
      
      

        <div className=" text-md font-semibold md:text-lg flex justify-around border-y-2 border-y-cyan-300 bg-gray-100 py-2 shadow-sm w-full ">
            <Link href='/profile/posts' className="flex-1 text-center py-2">Posts</Link>
            <Link href='/profile/followers' className="flex-1 text-center py-2">Followers</Link>
            <Link href='/profile/following' className="flex-1 text-center py-2">Following</Link>
            <Link href='/profile/about' className="flex-1 text-center py-2">About</Link>
            <Link href='/profile/settings' className="flex-1 text-center py-2">Settings</Link>
        </div>
        
        <div className="mt-6 text-[13px] px-3 block w-full ">
            {children}     
        </div>
    </div>
    
  );
}
