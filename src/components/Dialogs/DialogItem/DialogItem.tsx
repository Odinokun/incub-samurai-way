import React, {FC} from 'react';
import s from './dialog-item.module.css';
import {DialogType} from '../../../redux/state';

import {NavLink} from 'react-router-dom';

export const DialogItem: FC<DialogType> = (props) => {
  const path = '/dialogs/' + props.id;

  return (
    <NavLink to={path} className={s.dialogs__item} activeClassName={s.active}>{props.name}</NavLink>
  )
}