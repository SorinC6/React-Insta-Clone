import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
   console.log('Post Container props: ',props)
   return(
      <div className='post'>

         <div className='post-header'>
            <img src={props.post.thumbnailUrl} alt='user-img'/>
            <p>{props.post.username}</p>
         </div>

         <div className='post-img'>
            <img src={props.post.imageUrl} alt='post-img'/>
         </div>
         
         <CommentSection comments={props.post.comments}/>
      </div>
   )
}

export default PostContainer;