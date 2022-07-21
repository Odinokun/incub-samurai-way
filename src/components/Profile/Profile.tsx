import React, {FC} from 'react';
import {ProfilePageType} from '../../redux/state';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';

type PropsType = {
  state: ProfilePageType
};

export const Profile: FC<PropsType> = (props) => {
  return (
    <>
      <ProfileInfo/>
      <MyPosts post={props.state.post}/>
    </>
  )
}