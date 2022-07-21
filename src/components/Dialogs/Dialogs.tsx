import React, {FC} from 'react';
import s from './dialogs.module.css'
import {DialogsPageType} from '../../redux/state';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

type PropsType = {
  state: DialogsPageType
};

export const Dialogs: FC<PropsType> = (props) => {
  const dialogsElements = props.state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
  const messagesElements = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <h2 className={s.title}>Dialogs</h2>
      <div className={s.dialogs__body}>
        <ul className={s.dialogs__list}>
          {dialogsElements}
        </ul>
        <ul className={s.messages__list}>
          {messagesElements}
        </ul>
      </div>
    </div>
  )
}