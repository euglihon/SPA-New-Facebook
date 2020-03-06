import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsItems = props.posts.map( (postElement) => {
    return (
      <Post message={postElement.messageText} likes={postElement.likesCount} />
    )
  });

  const onAddPost = () => {
    props.addPostItem();
  }

  const onPostChange = (event) => {
    props.updatePostText(event.target.value);
  }

  return (
    <div>
      <h3>My posts</h3>

      <div>
        <textarea onChange={ onPostChange } value={ props.textareaValue }
        />
        <button onClick={ onAddPost }>add posts</button>
      </div>

      <div>
        { postsItems }
      </div>

    </div>
  )
}

export default MyPosts;
