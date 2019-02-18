import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
   console.log('Post Container props: ',props)
   return(
      <div className='post'>
         <CommentSection comments={props.post.comments}/>
      </div>
   )
}

export default PostContainer;