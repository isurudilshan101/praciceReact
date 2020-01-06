import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App= () =>{
    return(
        <div className="ui container comments">
           <CommentDetail author="isuru" timeAgo="yesterday 04:50pm" content="I like this"/>
             <CommentDetail author="dilshan" timeAgo="Today 10:10am" content="Nice blog post"/>
             <CommentDetail author="kamal" timeAgo="yesterday 05:19pm" content="I like the writing"/>
          
        </div>
    );

}
ReactDom.render(<App/>,document.querySelector('#root'));
