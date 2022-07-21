import React, {FC} from 'react';
import s from './message.module.css';

import {MessageType} from '../../../redux/state';

export const Message: FC<MessageType> = (props) => {
  return (
    <li className={s.messages__item}>{props.message}</li>
  )
}