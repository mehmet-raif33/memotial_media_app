"use client"
import Image from 'next/image';
import ProfileImage from '../Assets/images/profileImage.jpg';

const followers = [
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  },
  {
    profilePicture: ProfileImage,
    username: 'Jessica',
  }
];

const Followers = () => {
  return (
    <div className=" p-4">
      <h2 className="text-2xl font-semibold mb-4">Followers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-4">
        {followers.map((follower, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image src={follower.profilePicture} alt={follower.username} className="w-12 h-12 rounded-full mr-3" />
              <p className="font-semibold text-lg">{follower.username}</p>
            </div>
            <button className="bg-green-500 text-white py-1 px-3 rounded-lg">
            Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;