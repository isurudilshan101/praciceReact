import React from 'react';
import faker from 'faker';

const CommentDetail=props =>{
     return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
            <a href="/" className="auther">
              {props.author}
            </a>
            <div className="metadata">
              {props.timeAgo}
                <span className="date"> </span>
                </div>
                <div className="text">{props.content} </div>
        </div>
    </div>

     );
};

export default CommentDetail;