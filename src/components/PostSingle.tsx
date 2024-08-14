"use client"
import { useNavigate } from "react-router-dom"

interface PostInterface {
    image: string
    postId: number
    description: string
}

const PostSingle = ( {postData} : {postData: PostInterface} ) => {

    const navigate = useNavigate();

    return (
    <div key={Math.random()}  onClick={() => { navigate(`/post/${postData.postId}`); window.screenY = 0}}  className="hover:cursor-pointer hover:scale-[1.01] transition-all post-container flex justify-between items-center bg-white shadow-md rounded-md p-4 mb-4">
        <div className="post-info flex items-center">
            <div className="voting-system flex flex-col items-center mr-4">
                <button className="text-green-500">▲</button>
                    <span>31</span>
                <button className="text-red-500">▼</button>
            </div>
            <div className="post-text mr-4">
                <p className="text-gray-800">{postData.description}</p>
                <p className="text-sm text-gray-500">18.09.2004</p>
            </div>
        </div>
        <div className="post-author flex items-center">
            <div className="author-info flex flex-col items-end w-14 justify-center">
                <img src={postData.image} alt='muratbenli' className="w-14 h-14 rounded-full" />
                <span className="font-bold text-sm">Murat Benli</span>
            </div>
        </div>
    </div>
  )
}

export default PostSingle