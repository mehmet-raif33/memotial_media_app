"use client"
import ProfileImage from '../Assets/images/profileImage.jpg'
import PostSingle from './PostSingle'

const Posts = () => {


    interface PostInterface {
        image: string
        postId: number
        description: string
    }

    const posts: PostInterface[] = [
        {
            image: ProfileImage,
            postId: 1,
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            image: ProfileImage,
            postId: 2,
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        },
        {
            image: ProfileImage,
            postId: 3,
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        }
    ]

    return (
        <div className="mb-2">
            {posts.map(post => (
                <PostSingle key={Math.random()} postData={post} />
            ))}
        </div>
    )
}

export default Posts
