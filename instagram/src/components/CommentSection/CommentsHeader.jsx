import React, {Component} from 'react';

class CommentsHeader extends Component {
   constructor(props){
      super(props)
      this.state={
         likes:this.props.likes,
      }
   }

   render(){
      return(
         <div>
            <div className='action-buttons'>
					<i className="far fa-heart" />
					<i className="far fa-comment" />
				</div>

				<div>
					<p className='like-btn'>{this.state.likes} likes</p>
				</div>
         </div>
      )
   }
}

export default CommentsHeader;
