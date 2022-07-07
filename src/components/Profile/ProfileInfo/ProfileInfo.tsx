import s from './profile-info.module.css';

import React, {FC} from "react";

type PropsType = {}

export const ProfileInfo: FC<PropsType> = (props) => {
  return (
    <>
      <div className={s.banner}>
        <img src="https://source.unsplash.com/collection/190727/1500x500" alt='banner'/>
      </div>

      <div className={s.profile__user}>AVA + DESCRIPTION</div>
      <div>
        My posts

        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <ul className={s.posts}>
          <li className={s.post}>
            <div className={s.avatar}>
              <img src="https://source.unsplash.com/800x800/?people,man" alt="avatar"/>
            </div>
            <div className={s.post__content}>
              <div className={s.text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos illo ipsam, quasi
                  vero voluptatem. Omnis, reiciendis, sequi?</p>
              </div>
              <div className={s.reactions}>
                <button className={s.reaction__btn}>like</button>
                <button className={s.reaction__btn}>dislike</button>
                <div className={s.likes__count}>10</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}