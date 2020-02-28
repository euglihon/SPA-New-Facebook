import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsItems = props.posts.map( (postElement) => {
    return (
      <Post message={postElement.messageText} likes={postElement.likesCount} />
    )
  });


  const newPostElement = React.createRef();

  const addPostItem = () => {
    //props.addPost();
    //props.addTextareaValue('');
    props.dispatch( { type: 'ADD-POST' } );
    props.dispatch( { type: 'ADD-TEXTAREA-VALUE', newValue: '' } )
  }

  const onChangeText = () => {
    const text = newPostElement.current.value;
    //props.addTextareaValue(newValue)
    props.dispatch( { type: 'ADD-TEXTAREA-VALUE', newValue: text } )
  }

  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea onChange={ onChangeText } ref={ newPostElement } value={ props.textareaValue }
        />
        <button onClick={ addPostItem }>add posts</button>
      </div>

      <div>
        { postsItems }
      </div>

    </div>
  )
}

export default MyPosts;
