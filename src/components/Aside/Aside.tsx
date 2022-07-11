import s from "./aside.module.css"

import React, {FC} from "react";

type PropsType = {}

export const Aside: FC<PropsType> = (props) => {
  return (
    <aside className={s.aside}>
      <nav>
        <ul className={s.menu}>
          <li className={s.item}>
            <a href="/profile" className={s.link}>Profile</a>
          </li>
          <li className={s.item}>
            <a href="/dialogs" className={s.link}>Messages</a>
          </li>
          <li className={s.item}>
            <a href="/news" className={s.link}>News</a>
          </li>
          <li className={s.item}>
            <a href="/music" className={s.link}>Music</a>
          </li>
          <li className={s.item}>
            <a href="/settings" className={s.link}>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}