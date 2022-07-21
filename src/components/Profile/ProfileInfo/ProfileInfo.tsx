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
    </>
  )
}