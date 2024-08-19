'use client'
import React from 'react'
import { useState } from 'react';
import closed from '../../Assets/images/closed.png';
import opened from '../../Assets/images/opened.png';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Page = () => {

  const [isContactsVisible, setIsContactsVisible] = useState(true);

  return (
    <motion.div className="flex h-[600px] bg-gray-100">

      <AnimatePresence>
        {isContactsVisible ? (
          <motion.div
            initial={{ width: '50px' }}
            animate={{ width: '50px' }}
            exit={{ width: '50px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-10 p-2 pt-7 bg-sky-200"
          >
            <Image
              src={closed}
              alt="Closed"
              onClick={() => setIsContactsVisible(!isContactsVisible)}
              className="toggle-image"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ width: '50px' }}
            animate={{ width: '250px' }}
            exit={{ width: '50px' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-sky-200 text-slate-800"
          >
            <div className="OurDiv flex justify-between p-8">
              <h2 className="text-xl font-bold mb-4">Contacts</h2>
              <button
                className="p-2 w-10 relative bottom-1 left-2"
                onClick={() => setIsContactsVisible(!isContactsVisible)}
              >
                <Image src={opened} alt="Opened" className="toggle-image" />
              </button>
            </div>
            <ul>
              <li className="p-5 flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="User 1"
                  width={40} // Görselin genişliği
                  height={40} // Görselin yüksekliği
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p>User 1</p>
              </li>
              <li className="p-5 border-b flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="User 1"
                  width={40} // Görselin genişliği
                  height={40} // Görselin yüksekliği
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p>User 1</p>
              </li>
              <li className="p-5 border-b flex items-center">
                <Image
                  src="https://via.placeholder.com/40"
                  alt="User 1"
                  width={40} // Görselin genişliği
                  height={40} // Görselin yüksekliği
                  className="w-10 h-10 rounded-full mr-3"
                />
                <p>User 1</p>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between flex-col h-[600px]">

          <div className='p-4 '>
            {/* Message from User 1 */}
            <div className="flex items-start mb-4">
              <Image
                src="https://via.placeholder.com/40"
                alt="User 1"
                width={40} // Görselin genişliği
                height={40} // Görselin yüksekliği
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="bg-gray-200 p-4 rounded">
                  <p className="font-semibold text-sm">User 1</p>
                  <p>Hello!</p>
                </div>
                <span className="text-xs text-gray-500">10:00 AM</span>
              </div>
            </div>

            {/* Message from You */}
            <div className="flex items-end justify-end mb-4">
              <div>
                <div className="bg-blue-200 p-4 rounded">
                  <p className="font-semibold">You</p>
                  <p>Hi there!</p>
                </div>
                <span className="text-xs text-gray-500">10:01 AM</span>
              </div>
              <Image
                src="https://via.placeholder.com/40"
                alt="You"
                width={40} // Görselin genişliği
                height={40} // Görselin yüksekliği
                className="w-10 h-10 rounded-full ml-3"
              />
            </div>            
          </div>


          {/* Add more messages as needed */}
          <div className="w-full relative bottom-0 right-0 left-0 bg-white p-3 z-10 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded mr-3 outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>

        
      </div>

    </motion.div>
  )
}

export default Page;