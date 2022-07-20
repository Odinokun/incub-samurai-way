import React, {FC} from 'react';
import s from './dialogs.module.css'

type PropsType = {};

export const Dialogs: FC<PropsType> = (props) => {
  return (
    <div className={s.dialogs}>
      <h2 className={s.title}>Dialogs</h2>
      <div className={s.dialogs__body}>
        <ul className={s.dialogs__list}>
          {/*{dialogsElements}*/}
        </ul>
        <ul className={s.messages__list}>
          {/*{messagesElements}*/}
        </ul>
      </div>
    </div>
  )
}