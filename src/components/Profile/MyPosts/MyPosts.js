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
    props.addPost();
    props.addTextareaValue('');
    newPostElement.current.value = '';
  }

  const onChangeText = () => {
    const newValue = newPostElement.current.value;
    props.addTextareaValue(newValue)
  }


  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea
          onChange={ onChangeText }
          ref={ newPostElement }
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
