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
    const postItemText = newPostElement.current.value;
    props.addPost(postItemText);

    newPostElement.current.value = ''
  }



  return (
    <div>
      My posts

      <div>
        <textarea ref={ newPostElement }></textarea>
        <button onClick={ addPostItem }>add posts</button>
      </div>

      <div>
        { postsItems }
      </div>

    </div>
  )
}

export default MyPosts;
