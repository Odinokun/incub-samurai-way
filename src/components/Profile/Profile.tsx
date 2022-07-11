import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PropsType = {};

export const Profile: FC<PropsType> = (props) => {
  return (
    <>
      <ProfileInfo/>
    </>
  )
}