import s from "./aside.module.css"

import React, {FC} from "react";
import {NavLink} from 'react-router-dom';

type PropsType = {}

export const Aside: FC<PropsType> = (props) => {
  return (
    <aside className={s.aside}>
      <nav>
        <ul className={s.menu}>
          <li className={s.item}>
            <NavLink to="/profile"
                     activeClassName={s.active}
                     className={s.link}>Profile</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/dialogs"
                     activeClassName={s.active}
                     className={s.link}>Messages</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/news"
                     activeClassName={s.active}
                     className={s.link}>News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music"
                     activeClassName={s.active}
                     className={s.link}>Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/settings"
                     activeClassName={s.active}
                     className={s.link}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}