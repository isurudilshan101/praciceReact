import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App= () =>{
    return(
        <div className="ui container comments">
           <ApprovalCard>
           <CommentDetail 
            author="isuru"
            timeAgo="yesterday 04:50pm"
            content="I like this"
            avatar={faker.image.avatar()}
            />
             </ApprovalCard>

             <ApprovalCard>
             <CommentDetail 
             author="dilshan" 
             timeAgo="Today 10:10am" 
             content="Nice blog post"
             avatar={faker.image.avatar()}
             />
              </ApprovalCard>

              <ApprovalCard>
             <CommentDetail
              author="kamal" 
              timeAgo="yesterday 05:19pm"
              content="I like the writing"
              avatar={faker.image.avatar()}
              />
               </ApprovalCard>
          
        </div>
    );

}

ReactDom.render(<App/>,document.querySelector('#root'));
