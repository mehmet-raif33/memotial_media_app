"use client"
import ProfileImage from '../Assets/images/profileImage.jpg'
import Image from 'next/image'

const Comment = () => {
  return (
    <div className=" post-container text-sm md:text-lg flex justify-between items-center bg-slate-100 mb-2 p-4">
        <div className="post-info flex items-center">
            <div className="voting-system flex flex-col items-center mr-4">
                <button className="text-green-500">▲</button>
                    <span>31</span>
                <button className="text-red-500">▼</button>
            </div>
            <div className="post-text mr-4">
                <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dicta facere nostrum tempore, provident doloremque nemo, repudiandae perferendis, consectetur non corrupti delectus! Beatae explicabo, non ratione nisi laboriosam incidunt aliquam!</p>
                <p className="text-sm text-gray-500">18.09.2004</p>
            </div>
        </div>
        <div className="post-author flex items-center">
            <div className="author-info flex flex-col items-end w-14 justify-center">
                <Image src={ProfileImage} alt='muratbenli' className="w-12 h-12 md:w-14 md:h-14 rounded-full" />
                <span className="font-bold text-center text-nowrap text-[13px] md:text-sm">Murat Benli</span>
            </div>
        </div>
    </div>
  )
}

export default Comment