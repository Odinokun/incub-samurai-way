import React, {FC} from 'react';
import s from './my-posts.module.css'
import {PostType} from '../../../redux/state';

import {Post} from './Post/Post';

type PropsType = {
  post: Array<PostType>
};

export const MyPosts: FC<PropsType> = (props) => {
  const postsElements = props.post.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

  return (
    <div>
      My posts

      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>

      <ul className={s.posts}>
        {postsElements}
      </ul>
    </div>
  )
}