import s from "./header.module.css"

import React, {FC} from "react";

type PropsType = {}

export const Header: FC<PropsType> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://source.unsplash.com/800x800/?logo" alt="Odinokun's logo"/>
      </div>
    </header>
  )
}